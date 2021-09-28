const router = require('express').Router();
const sequelize = require('../config/connection');
const { Party } = require('../models');
const { Player } = require('../models');
const { Enemy } = require('../models');

router.get('/', (req, res) => {
    Party.findAll({
        
    })
        .then((dbPartyData) => {
            const partyData = dbPartyData.map(party => party.get({
                plain: true
            }))
            res.render('homepage', {
                partyData,
                loggedIn: req.session.loggedIn
            })
        });
});
router.get('/player', (req, res) => {
    Player.findAll({
        
    })
        .then((dbPlayerData) => {
            const playerData = dbPlayerData.map(player => player.get({
                plain: true
            }))
            res.render('player', {
                playerData,
                loggedIn: req.session.loggedIn,
                playerPage: req.session.playerPage
            })
    });

});

router.get('/player', (req, res) => {
    Enemy.findAll({
        
    })
        .then((dbEnemyData) => {
            const enemyData = dbEnemyData.map(enemy => enemy.get({
                plain: true
            }))

            res.render('player', {
                enemyData,
                loggedIn: req.session.loggedIn,
                playerPage: req.session.playerPage
            })
});
})

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/createaccount', (req, res) => {
    res.render('createaccount');
});

router.get('/addcharacter', (req, res) => {
    res.render('addcharacter');
});

router.get('/addparty', (req, res) => {
    res.render('addparty');
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;