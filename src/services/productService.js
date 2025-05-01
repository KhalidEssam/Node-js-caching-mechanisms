const axios = require('axios');
const API_BASE = 'https://fakestoreapi.com/products';

// fetches product from external API
exports.fetchProduct = async id => {
  const { data } = await axios.get(`${API_BASE}/${id}`);
  return data;
};
