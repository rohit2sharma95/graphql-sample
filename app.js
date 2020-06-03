const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./src/schema');
const { models, sequelize } = require('./models');
const { getUserFromToken } = require('./utils');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const { authorization } = req.headers;
    const user = await getUserFromToken((authorization || '').replace('Bearer ', ''), models);
    return {
      user,
      models,
      sequelize
    };
  }
});
server.applyMiddleware({ app });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
