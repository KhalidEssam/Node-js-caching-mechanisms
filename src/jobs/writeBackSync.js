const client = require('../config/redisClient');

// periodically sync write-back cache to DB
const syncWriteBack = async () => {
  const keys = await client.keys('wb_product:*');
  for (const key of keys) {
    const product = JSON.parse(await client.get(key));
    console.log('Syncing to DB:', product);
    // TODO: actual DB upsert here
  }
};

setInterval(syncWriteBack, 60_000);
