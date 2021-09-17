const { Party } = require('../models');

const partyData = [
    {
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
    },
]

const seedParties = () => Party.bulkCreate(partyData, {individualHooks: true});

module.exports = seedParties;