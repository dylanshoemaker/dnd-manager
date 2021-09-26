const router = require('express').Router();
const sequelize = require('../config/connection');
const { Party } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        login, 
        loggedIn: req.session.loggedIn
    })
});

router.get('/player', (req, res) => {
    res.render('player');
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


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;