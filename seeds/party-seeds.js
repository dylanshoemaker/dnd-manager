const { Party } = require('../models');

const partyData = [
    {
        partyName: ''
    },
    {
        partyName: ''
    },
    {
        partyName: ''
    },
    {
        partyName: ''
    },
]

const seedParties = () => Party.bulkCreate(partyData, {individualHooks: true});

module.exports = seedParties;