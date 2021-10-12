
const router = require('express').Router();
const { Party, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/",  withAuth,  (req, res) => {
  Party.create({
    party_name: req.body.party_name,
    user_id: req.session.user_id
  })
    .then((dbPartyData) => res.json(dbPartyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;