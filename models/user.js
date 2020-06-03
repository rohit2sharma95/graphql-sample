const Constants = require('../lib/constants');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    imagePath: {
      type: DataTypes.STRING
    },
    addressLine1: {
      type: DataTypes.STRING
    },
    addressLine2: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM(
        Constants.Roles.Admin,
        Constants.Roles.User
      ),
      allowNull: false
    }
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Recipe);
  };
  return User;
};
