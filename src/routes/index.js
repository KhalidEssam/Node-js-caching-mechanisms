const router = require('express').Router();

router.use('/cache-aside', require('./cacheAside'));
router.use('/write-through', require('./writeThrough'));
router.use('/write-back', require('./writeBack'));
router.use('/read-through', require('./readThrough'));
router.use('/write-around', require('./writeAround'));

module.exports = router;
