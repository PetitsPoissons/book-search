const { User, Book } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
      return (await User.findOne({ username })).select('-__v -password');
    },
  },
};

module.exports = resolvers;
