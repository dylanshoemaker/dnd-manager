const router = require('express').Router();
const sequelize = require('../config/connection');
const { Party } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', party);
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/createaccount', (req, res) => {
    res.render('createaccount');
});

router.get('/player', (req, res) => {
    res.render('player')
})

module.exports = router;