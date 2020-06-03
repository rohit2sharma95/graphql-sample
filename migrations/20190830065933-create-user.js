const Constants = require('../lib/constants');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imagePath: {
      type: Sequelize.STRING,
    },
    addressLine1: {
      type: Sequelize.STRING
    },
    addressLine2: {
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    role: {
      allowNull: false,
      type: Sequelize.ENUM(
        Constants.Roles.Admin,
        Constants.Roles.User
      ),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Users')
};
