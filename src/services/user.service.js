const bcrypt = require('bcryptjs');

module.exports = {
  create: async ({
    firstName, lastName, email, gender, password, role
  }, { models }) => models.User.create({
    firstName,
    lastName,
    email,
    gender,
    password: await bcrypt.hash(password, 10),
    role
  }),

  getById: ({ id }, { models }) => models.User.findOne({ where: { id } }),

  getAll: ({ offset = 0, limit = 25 }, { models }) => models
    .User.findAndCountAll({ offset, limit })
    .then(({ count, rows }) => ({
      count,
      offset,
      limit,
      users: rows
    })),

  updateById: ({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    addressLine1,
    addressLine2
  }, { models }) => models.User.update({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    addressLine1,
    addressLine2
  }, { where: { id } })
    .then(() => models.User.findOne({ where: { id } }))
};
