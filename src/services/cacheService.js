const client = require('../config/redisClient');

// generic read-through helper
exports.readThrough = async (key, fetchFn, ttl = 3600) => {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  const fresh = await fetchFn();
  await client.setEx(key, ttl, JSON.stringify(fresh));
  return fresh;
};
