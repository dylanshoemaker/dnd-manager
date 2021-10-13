const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const partyRoutes = require('./party-routes.js');
const playerRoutes = require('./player-routes.js');
const enemyRoutes = require('./enemy-routes.js')
const addPartyRoutes = require('./addparty-routes.js')


router.use('/users', userRoutes);
router.use('/party', partyRoutes);
router.use('/player', playerRoutes);
router.use('/party', addPartyRoutes);
router.use('/enemy', enemyRoutes);

module.exports = router;