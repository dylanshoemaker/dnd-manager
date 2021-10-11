const router = require('express').Router();
const { Player, Party } = require('../../models');
const withAuth = require("../../utils/auth");

router.get('/:party_id', withAuth, (req, res) => {
  Player.findAll({
    where: {
      party_id: req.params.party_id
    }
  })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects => {Player_text: "This is the Player", user_id: 1, post_id: 2}

  Party.findOne({
    where: {
      party_name: req.body.party_name
    }
  })
    .then(dbPartyData => {
      console.log(req.body);
      const party_id = dbPartyData.dataValues.id
      console.log(dbPartyData.dataValues.id);
      Player.create({
        character_name: req.body.character_name,
        player_race: req.body.player_race,
        player_class: req.body.player_class,
        level: req.body.level,
        armor_class: req.body.armor_class,
        health: req.body.health,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        wisdom: req.body.wisdom,
        intelligence: req.body.intelligence,
        charisma: req.body.charisma,
        pp: req.body.pp,
        user_id: req.body.user_id,
        party_id: party_id
      })
    })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Player.update(
    {
      character_name: req.body.character_name,
      player_race: req.body.player_race,
      player_class: req.body.player_class,
      level: req.body.level,
      armor_class: req.body.armor_class,
      health: req.body.health,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      wisdom: req.body.wisdom,
      intelligence: req.body.intelligence,
      charisma: req.body.charisma,
      pp: req.body.pp
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPlayerData => {
      if (!dbPlayerData[0]) {
        res.status(404).json({ message: 'No Player found with this id ' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.delete('/:id', withAuth, (req, res) => {
  Player.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPlayerData => {
      if (!dbPlayerData) {
        res.status(404).json({ message: 'No Player found with this id!' });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/player", (req, res) => {
  Party.findAll({
    where: {
      user_id: req.session.user_id
    },
    include: [{
      model: Player,
    }]
  })
    .then((dbPlayerData) => {
      const dbplayerStatArr = dbPlayerData[0].parties.map((user) =>
        user.get({
          plain: true,
        })
      )
      console.log(dbplayerStatArr)
      res.render("player", {
        playerData: dbplayerStatArr,
        loggedIn: req.session.loggedIn,
        playerPage: req.session.playerPage,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;