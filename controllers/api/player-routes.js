const router = require('express').Router();
const { Player } = require('../../models');
const withAuth = require("../../utils/auth");

router.get('/', withAuth,  (req, res) => {
  Player.findAll({
    where: {
      party_id: req.session.party_id
    }
  })
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth,  (req, res) => {
    // expects => {Player_text: "This is the Player", user_id: 1, post_id: 2}
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
        party_id: req.body.party_id
    })
      .then(dbPlayerData => res.json(dbPlayerData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/:id', withAuth,  (req,res) => {
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

  router.delete('/:id', withAuth,  (req, res) => {
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
  
  module.exports = router;