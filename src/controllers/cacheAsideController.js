const client = require('../config/redisClient');
const { fetchProduct } = require('../services/productService');

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const key = `product:${id}`;
  const cached = await client.get(key);

  if (cached) return res.json(JSON.parse(cached));

  const product = await fetchProduct(id);
  await client.setEx(key, 3600, JSON.stringify(product));
  res.json(product);
};
