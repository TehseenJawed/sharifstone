const { Visualizer } = require("../models");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

const createVisualizer = async (body) => {
  const response = await Visualizer.create(body)
  return response
};

const getAllVisualizer = async () => {
  const response = await Visualizer.find()
  return response
};

module.exports = {
  createVisualizer,
  getAllVisualizer
};
