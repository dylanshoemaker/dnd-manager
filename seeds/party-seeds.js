const { Party } = require('../models');

const partyData = [
    {
        party_name: 'Dragon',
        user_id: 1
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

const seedParties = () => Party.bulkCreate(partyData);

module.exports = seedParties;