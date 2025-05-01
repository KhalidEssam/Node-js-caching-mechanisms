const { readThrough } = require('../services/cacheService');
const { fetchProduct } = require('../services/productService');

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const key = `rt_product:${id}`;
  const product = await readThrough(key, () => fetchProduct(id), 3600);
  res.json(product);
};
