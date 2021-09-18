const { Party } = require('../models');

const partyData = [
    {
<<<<<<< HEAD
        partyName: 'The Nuclear Bananas'
    },
    {
        partyName: 'Two Men and a Truck'
    },
    {
        partyName: 'The Oatmeal Enthusiasts'
    },
    {
        partyName: 'Earthen Kindred'
    },
    {
        partyName: 'Wasatch Legion'
=======
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
>>>>>>> d937060018888a1ac7c875c37d1d29f62da3f0f7
    },
    {
        party_name: 'Three Blades and a Goose'
    }
]

const seedParties = () => Party.bulkCreate(partyData);

module.exports = seedParties;