const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const path = require('path');
const schema = require('./src/schema');
const { models, sequelize } = require('./models');
const { getUserFromToken } = require('./src/utils');
const api = require('./src/apis');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/images/', express.static(path.join(__dirname, '/assets/images')));

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
