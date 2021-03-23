const axios = require('axios');
const { config } = require('../config/config');
const API = config.server.api;

//SIGNUP
exports.signin = async (user) => {
  try {
    const response = await axios.post(`${API}/signin`, user);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

//CREATE
exports.create = async (data, url) => {
  try {
    const response = await axios.post(`${API}/${url}`, data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

//READ
exports.read = async (url) => {
  try {
    const response = await axios.get(`${API}/${url}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

//REMOVE
exports.update = async (url) => {
  try {
    const response = await axios.put(`${API}/${url}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
