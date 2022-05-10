const User = require('./User');
const Gym = require('./Gym');

Gym.hasMany(User, {
    foreignKey: 'gym_id',
});

User.belongsTo(Gym, {
    foreignKey: 'gym_id',
});

module.exports = { User, Gym };