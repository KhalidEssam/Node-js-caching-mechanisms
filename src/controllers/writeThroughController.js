const client = require('../config/redisClient');

exports.createProduct = async (req, res) => {
  const product = req.body;
  // simulate DB insert + cache update
  await client.set(`product:${product.id}`, JSON.stringify(product));
  res.json({ message: 'Product created (write-through)', product });
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await client.get(`product:${id}`);
  res.json(JSON.parse(product));
};
