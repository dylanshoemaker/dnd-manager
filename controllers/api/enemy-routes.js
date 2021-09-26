const router = require('express').Router();
const { Enemy } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Enemy.findAll({
      where: {
        party_id: req.session.party_id
      }
    })
      .then(dbEnemyData => res.json(dbEnemyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/', withAuth,  (req, res) => {
      // expects => {Enemy_text: "This is the Enemy", user_id: 1, post_id: 2}
      Enemy.create({
          enemy_name: req.body.enemy_name,
          enemy_type: req.body.enemy_type,
          armor_class: req.body.armor_class,
          health: req.body.health,
          party_id: req.body.party_id,
          user_id: req.body.user_id        
      })
        .then(dbEnemyData => res.json(dbEnemyData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    });
  
    router.put('/:id', withAuth,  (req,res) => {
      Enemy.update(
          {
            enemy_name: req.body.enemy_name,
            enemy_type: req.body.enemy_type,
            armor_class: req.body.armor_class,
            health: req.body.health
          }, 
          {
              where: {
                  id: req.params.id
              }
          }
      )
      .then(dbEnemyData => {
          if (!dbEnemyData[0]) {
              res.status(404).json({ message: 'No Enemy found with this id ' });
              return;
          }
          res.json(dbEnemyData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
  })
  
    router.delete('/:id', withAuth,  (req, res) => {
      Enemy.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbEnemyData => {
          if (!dbEnemyData) {
            res.status(404).json({ message: 'No Enemy found with this id!' });
            return;
          }
          res.json(dbEnemyData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;