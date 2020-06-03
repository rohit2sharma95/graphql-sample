const { UserService } = require('../services');
const { authenticate } = require('../../utils');

module.exports = {
  Query: {
    user: authenticate((_, args, context) => UserService.getById(args, context)),
    allUsers: authenticate((_, args, context) => UserService.getAll(args, context))
  },
  Mutation: {
    createUser: (_, args, context) => UserService.create(args, context),
    updateUser: authenticate((_, args, context) => UserService.updateById(args, context))
  },
  User: {
    recipes: (user) => user.getRecipes()
  }
};
