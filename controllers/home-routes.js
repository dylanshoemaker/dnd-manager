const router = require("express").Router();
const sequelize = require("../config/connection");
const { Party, Player, Enemy, User  } = require("../models");


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
      model: Player
    }],
  })
  .then((dbPartyData) => {
    const dbPlayerData = dbPartyData.players.map((players) =>
      players.get({
        plain: true,
      })
    )
    
    // console.log(dbPlayerData);
    // res.json(dbPlayerData);
    res.render("player", {
      dbPlayerData: dbPlayerData,
      loggedIn: req.session.loggedIn,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// router.get("/party/:party_name", (req, res) => {
//     Enemy.findOne({
//       where: {
//         party_name: req.params.party_name,
//       },
//       include: [{
//         model: Enemy
//       }],
//     })
//     .then((dbEnemyData) => {
//       const enemyData = dbEnemyData.enemy.map((enemy) =>
//         enemy.get({
//           plain: true,
//         })
//       )
      
//       console.log(enemyData);
//       // res.json(dbPlayerData);
//       res.render("enemy", {
//         enemyData: enemyData,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



router.get("/createaccount", (req, res) => {
  res.render("createaccount");
});

router.get("/addcharacter", (req, res) => {
  res.render("addcharacter");
});

router.get("/addparty", (req, res) => {
  res.render("addparty");
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
  } res.render("createaccount");
});

module.exports = router;
