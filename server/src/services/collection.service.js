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

const getAllCollection = async (body) => {
  const response = await Collection.find()
  return response
};

module.exports = {
  createCollection,
  getAllCollection
};
