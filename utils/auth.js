const jwt = require('jsonwebtoken');
const { UserService } = require('../src/services');

module.exports = {
  getUserFromToken: async (token, models) => {
    try {
      const { id } = jwt.verify(token, process.env.JWT_KEY);
      return await UserService.getById({ id }, { models });
    } catch (error) {
      return null;
    }
  },
  authenticate: (next) => (root, args, context, info) => {
    if (!context.user) {
      throw new Error('Unauthenticated!');
    }
    return next(root, args, context, info);
  },
  validateRole: (role) => (next) => (root, args, context, info) => {
    if (!context.user || context.user.role !== role) {
      throw new Error('Unauthorized!');
    }
    return next(root, args, context, info);
  }
};
