const User = require('./User');
const Gym = require('./Gym');

User.belongsTo(Gym, {
    foreignKey: 'gym_id',
});

Gym.hasMany(User, {
    foreignKey: 'gym_id',
});

module.exports = { User, Gym };