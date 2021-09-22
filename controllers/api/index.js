const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const partyRoutes = require('./party-routes.js');

router.use('/users', userRoutes);
router.use('/party', partyRoutes);

module.exports = router;