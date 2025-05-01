const client = require('../config/redisClient');
const { fetchProduct } = require('../services/productService');

exports.createProduct = async (req, res) => {
  const product = req.body;
  // simulate DB write only
  console.log('DB write:', product);
  res.json({ message: 'Product created (write-around)', product });
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const key = `wa_product:${id}`;
  const cached = await client.get(key);

  if (cached) return res.json(JSON.parse(cached));

  const product = await fetchProduct(id);
  await client.setEx(key, 3600, JSON.stringify(product));
  res.json(product);
};
