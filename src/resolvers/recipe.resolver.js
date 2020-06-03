const { RecipeService } = require('../services');
const { authenticate } = require('../utils');

module.exports = {
  Query: {
    allRecipes: authenticate((_, args, context) => RecipeService.getAll(args, context)),
    recipe: authenticate((_, args, context) => RecipeService.getById(args, context))
  },
  Mutation: {
    createRecipe: authenticate((_, args, context) => RecipeService.create(args, context)),
    updateRecipe: authenticate((_, args, context) => RecipeService.updateById(args, context))
  },
  Recipe: {
    user: (recipe) => recipe.getUser()
  }
};
