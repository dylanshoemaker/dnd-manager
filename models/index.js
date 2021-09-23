const User = require('./User');
const Party = require('./Party');
const Player = require('./Player');
const Enemy = require('./Enemy');

User.hasMany(Party, {
    foreignKey: 'user_id'
});

Party.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
})

module.exports = { User, Party, Player, Enemy };