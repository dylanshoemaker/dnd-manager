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
    console.log(dbPartyData)
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

// router.get("/player", (req, res) => {
//   Player.findAll({
//     include: [{
//       model: Enemy,
//       attributes: ['enemy_name', 'enemy_type', 'armor_class', 'health']
//     }]
//   }).then((dbPlayerData, dbEnemyData) => {
//     const playerData = dbPlayerData.map((player) =>
//       player.get({
//         plain: true,
//       })
//     );
//     // const enemyData = dbEnemyData.map((enemy) =>
//     //   enemy.get({
//     //     plain: true,
//     //   })
//     // );
//     res.render("player", {
//       playerData,
//       loggedIn: req.session.loggedIn,
//       playerPage: req.session.playerPage,
//     });
//     // res.render("player", {
//     //   enemyData,
//     //   loggedIn: req.session.loggedIn,
//     //   playerPage: req.session.playerPage,
//     // });
//   });
// });

// router.get("/player", (req, res) => {
//   Enemy.findAll({}).then((dbEnemyData) => {
//     const enemyData = dbEnemyData.map((enemy) =>
//       enemy.get({
//         plain: true,
//       })
//     );

//     res.render("player", {
//       enemyData,
//       loggedIn: req.session.loggedIn,
//       playerPage: req.session.playerPage,
//     });
//   });
// });

// router.get("/party", (req, res) => {
//   Party.findAll({}).then((dbPartyData) => {
//     const partyData = dbPartyData.map((party) =>
//       party.get({
//         plain: true,
//       })
//     );
//     res.render("homepage", {
//       partyData,
//       loggedIn: req.session.loggedIn,
//     });
//   });
// });

router.get("/player", (req, res) => {
  Player.findAll({}).then((dbPlayerData) => {
    const playerData = dbPlayerData.map((player) =>
      player.get({
        plain: true,
      })
    );
    res.render("player", {
      playerData,
      loggedIn: req.session.loggedIn,
      playerPage: req.session.playerPage,
    });
  });
});

router.get("/player", (req, res) => {
  Enemy.findAll({}).then((dbEnemyData) => {
    const enemyData = dbEnemyData.map((enemy) =>
      enemy.get({
        plain: true,
      })
    );

    res.render("player", {
      enemyData,
      loggedIn: req.session.loggedIn,
      playerPage: req.session.playerPage,
    });
  });
});

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
  } res.render("login");
});

router.get("/createaccount", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } res.render("createaccount");
});

module.exports = router;
