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
});

Party.hasMany(Player, {
    foreignKey: 'party_id'
});

Party.hasMany(Enemy, {
    foreignKey: 'party_id'
});

Player.belongsTo(Party, {
    foreignKey: 'party_id',
    onDelete: "cascade"
});

Enemy.belongsTo(Party, {
    foreignKey: 'party_id',
    onDelete: "cascade"
});


Player.hasMany(Enemy);
Enemy.belongsTo(Player);




module.exports = { User, Party, Player, Enemy };