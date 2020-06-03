const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const { gql } = require('apollo-server-express');
const User = require('./user.schema');
const Recipe = require('./recipe.schema');
const Auth = require('./auth.schema');
const { authResolver, userResolvers, recipeResolvers } = require('../resolvers');


const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [typeDefs, User, Recipe, Auth],
  resolvers: merge(authResolver, userResolvers, recipeResolvers)
});
