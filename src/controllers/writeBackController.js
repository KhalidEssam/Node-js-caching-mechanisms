const client = require('../config/redisClient');

exports.createProduct = async (req, res) => {
  const product = req.body;
  // write to cache only
  await client.set(`wb_product:${product.id}`, JSON.stringify(product));
  res.json({ message: 'Product created (write-back)', product });
};
