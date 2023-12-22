const { Collection } = require("../models");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

const createCollection = async (body) => {
  const response = await Collection.create(body)
  return response
};

module.exports = {
  createCollection,
};
