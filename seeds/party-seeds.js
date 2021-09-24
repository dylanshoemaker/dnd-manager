const { Party } = require('../models');

const partyData = [
    {
        party_name: 'Dragon',
        user_id: 1
    },
    {
        party_name: 'HODL GME',
        user_id: 2
    },
    {
        party_name: 'Beard of Jesse',
        user_id: 3
    },
    {
        party_name: 'Gang of the Seven Protectors',
        user_id: 1
    },
    {
        party_name: 'Three Blades and a Goose',
        user_id: 3
    },
    {
        party_name: 'Three Amigos',
        user_id: 1
    },
    {
        party_name: 'Valkyrie',
        user_id: 2
    },
    {
        party_name: 'Unhinged Tomfoolery',
        user_id: 2
    },
    {
        party_name: 'Nuclear Bananas',
        user_id: 1
    },
    {
        party_name: 'Ghost Riders',
        user_id: 3
    },
]

const seedParties = () => Party.bulkCreate(partyData);

module.exports = seedParties;