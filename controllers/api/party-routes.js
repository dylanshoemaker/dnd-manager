const router = require('express').Router();
const { Party, User } = require('../../models');

router.get('/', (req, res) => {
    console.log('=======================')
    Party.findAll({
        attributes: ['party_name'],
        // include: {
        //     model: User,
        //     attributes: ['id']
        // }
    })
    .then(dbPartyData => res.json(dbPartyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    console.log('=====================')
    Party.findOne({
        where: {
            id: req.params.id
        }
    });
});

router.post('/', (req, res) => {
    Party.create({
        party_name: req.body.party_name
    })
    .then(dbPartyData => res.json(dbPartyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.put('/:id', (req,res) => {
    Party.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbPartyData => {
        if (!dbPartyData[0]) {
            res.status(404).json({ message: 'No party found with this id ' });
            return;
        }
        res.json(dbPartyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/:id', (req, res) => {
    Party.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPartyData => {
        if (!dbPartyData) {
          res.status(404).json({ message: 'No party found with this id' });
          return;
        }
        res.json(dbPartyData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;