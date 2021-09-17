const { Party } = require('../models');

const partyData = [
    {
        party_name: ''
    },
    {
        party_name: ''
    },
    {
        party_name: ''
    },
    {
        party_name: ''
    },
    {
        party_name: ''
    }
]

const seedParties = () => Party.bulkCreate(partyData, {individualHooks: true});

module.exports = seedParties;