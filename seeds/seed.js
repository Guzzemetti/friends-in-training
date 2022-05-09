const sequelize = require('../config/connection');
const { User, Gym } = require('../models/Index');

const userData = require('./userData.json');
const gymData = require('./gymData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  
  await Gym.bulkCreate(gymData, {
    individualHooks: true,
    returning: true,
  });

  console.log('\n----- GYMS SEEDED -----\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log('\n----- USERS SEEDED -----\n');



  process.exit(0);
};

seedDatabase();
