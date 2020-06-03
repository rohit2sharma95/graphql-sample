const { gql } = require('apollo-server-express');

module.exports = gql`
  type AuthResult {
    token: String
    user: User
    error: String
  }
  extend type Query {
    login(email: String!, password: String!): AuthResult!
  }
`;
