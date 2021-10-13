const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Party,
  Player,
  Enemy,
  User
} = require("../models");


router.get("/party", (req, res) => {
  User.findAll({
      where: {
        id: req.session.user_id
      },
      include: [{
        model: Party,
        attributes: ['id', 'party_name']
      }]
    })
    .then((dbUserData) => {
      const dbPartyData = dbUserData[0].parties.map((user) =>
        user.get({
          plain: true,
        })
      )
      // console.log(dbPartyData)
      res.render("homepage", {
        dbPartyData: dbPartyData,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/party/:party_name", (req, res) => {
  Party.findOne({
      where: {
        party_name: req.params.party_name,
      },
      include: [{
        model: Player,
      },
      {
        model: Enemy,
      }],
    })
    .then((dbPartyData) => {
      // console.log(dbPartyData)
      const dbPlayerData = dbPartyData.players.map((players) =>
        players.get({
          plain: true,
        })
      )
      // console.log(dbPlayerData);
      const dbEnemyData = dbPartyData.enemies.map((enemies) =>
        enemies.get({
          plain: true,
        })
      )
      // console.log(dbEnemyData);
      res.render("player", {
        dbPlayerData: dbPlayerData,
        dbEnemyData: dbEnemyData,
        loggedIn: req.session.loggedIn,
        party_name: req.params.party_name
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/createaccount", (req, res) => {
  res.render("createaccount");
});

router.get("/addcharacter/:party_name", (req, res) => {
  res.render("addcharacter", {
    loggedIn: req.session.loggedIn,
    party_name: req.params.party_name
  });
});

router.get("/addparty", (req, res) => {
  res.render("addparty", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/party");
    return;
  }
  res.render("login");
});

router.get("/createaccount", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("createaccount");
});

module.exports = router;