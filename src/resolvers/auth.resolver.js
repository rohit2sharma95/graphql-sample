const { AuthService } = require('../services');

module.exports = {
  Query: {
    login: (_, args, context) => AuthService.login(args, context)
  },
};
