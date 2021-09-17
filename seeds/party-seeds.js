const { Party } = require('../models');

const partyData = [
    {
        party_name: 'Dragon'
    },
    {
        party_name: 'HODL GME'
    },
    {
        party_name: 'Beard of Jesse'
    },
    {
        party_name: 'Gang of the Seven Protectors'
    },
    {
        party_name: 'Three Blades and a Goose'
    }
]

const seedParties = () => Party.bulkCreate(partyData, {individualHooks: true});

module.exports = seedParties;