const router = require('express').Router();
const sequelize = require('../config/connection');
const { Party } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

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

module.exports = router;