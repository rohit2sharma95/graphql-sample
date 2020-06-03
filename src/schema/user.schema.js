const { gql } = require('apollo-server-express');

module.exports = gql`
  enum Role {
    Admin
    User
  }
  type User {
    id: Int!
    firstName: String!
    lastName: String
    fullName: String!
    email: String!
    phoneNumber:String
    gender: String!
    role: Role!
    imagePath: String
    addressLine1: String
    addressLine2: String
    recipes: [Recipe!]!
  }
  type UserWithCount {
    count: Int!
    offset: Int
    limit: Int
    users: [User!]!
  }
  extend type Query {
    allUsers(offset: Int, limit: Int): UserWithCount
    user(id: Int!): User
  }
  extend type Mutation {
    createUser(
      firstName: String!
      lastName: String
      email: String!
      gender: String!
      password: String!
      role: Role!
    ): User!
    updateUser(
      id: Int!
      firstName: String!
      lastName: String
      email: String!
      phoneNumber: String
      gender: String
      addressLine1: String
      addressLine2: String
    ): User!
  }
`;
