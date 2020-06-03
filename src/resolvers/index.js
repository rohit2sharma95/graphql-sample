const authResolver = require('./auth.resolver');
const userResolvers = require('./user.resolver');
const recipeResolvers = require('./recipe.resolver');

module.exports = {
  authResolver,
  userResolvers,
  recipeResolvers
};
