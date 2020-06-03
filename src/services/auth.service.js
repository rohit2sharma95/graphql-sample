const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  login: ({ email, password }, { models }) => models.User.findOne({ where: { email } })
    .then(async (user) => {
      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
          }, process.env.JWT_KEY);
          return { token, user };
        }
        return { error: 'Invalid credentials' };
      }
      return { error: 'Invalid credentials' };
    })
};
