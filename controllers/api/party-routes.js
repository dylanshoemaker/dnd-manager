const router = require("express").Router();
const { Party, User, Player, Enemy } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/",  withAuth, (req, res) => {
  console.log("=======================");
  Party.findAll({
    attributes: ["party_name"],
    // order: [['created_at', 'DESC']],
    // include: {
    //     model: User,
    //     attributes: ['id']
    // }
  })
    .then((dbPartyData) => res.json(dbPartyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:party_name",  withAuth,  (req, res) => {
  console.log("=====================");
  Party.findOne({
    where: {
      party_name: req.params.party_name,
    },
    include: [{
      model: Player
    }],
  })
  .then((dbPartyData) => {
    console.log(dbPartyData.players)
    const dbPlayerData = dbPartyData.players.map((players) =>
      players.get({
        plain: true,
      })
    )
    
    console.log(dbPlayerData);
    res.json(dbPlayerData);
    // res.render("player", {
    //   dbPlayerData: dbPlayerData,
    //   loggedIn: req.session.loggedIn,
    // });


    // res.render("player", {
    //   playerData: dbplayerStatArr,
    //   loggedIn: req.session.loggedIn,
    //   playerPage: req.session.playerPage,
    // });

    
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put("/:id",  withAuth,  (req, res) => {
  Party.update(
    {
      party_name: req.body.party_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPartyData) => {
      if (!dbPartyData[0]) {
        res.status(404).json({ message: "No party found with this id " });
        return;
      }
      res.json(dbPartyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id",  withAuth,  (req, res) => {
  Party.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPartyData) => {
      if (!dbPartyData) {
        res.status(404).json({ message: "No party found with this id" });
        return;
      }
      res.json(dbPartyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
