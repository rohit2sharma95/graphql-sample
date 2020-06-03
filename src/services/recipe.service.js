module.exports = {
  getById: ({ id }, { models }) => models.Recipe.findOne({ where: { id } }),

  getAll: ({ offset = 0, limit = 25 }, { models }) => models
    .Recipe.findAndCountAll({ offset, limit })
    .then(({ count, rows }) => ({
      count,
      offset,
      limit,
      recipes: rows
    })),

  create: ({
    userId, title, ingredients, direction
  }, { models }) => models.Recipe.create({
    userId, title, ingredients, direction
  }),

  updateById: ({
    id, title, ingredients, direction
  }, { models }) => models.Recipe.update({ title, ingredients, direction }, { where: { id } })

};
