const { gql } = require('apollo-server-express');

module.exports = gql`
  type Recipe {
    id: Int!
    title: String!
    ingredients: String!
    direction: String!
    user: User!
  }
  type RecipeWithCount {
    count: Int!
    offset: Int
    limit: Int
    recipes: [Recipe!]!
  }
  extend type Query {
    allRecipes(offset: Int, limit: Int): RecipeWithCount
    recipe(id: Int!): Recipe
  }
  extend type Mutation {
    createRecipe(
      userId: Int!
      title: String!
      ingredients: String!
      direction: String!
    ): Recipe!
    updateRecipe(
      id: Int!
      title: String!
      ingredients: String!
      direction: String!
    ): Recipe!
  }
`;
