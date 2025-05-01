const router = require('express').Router();
const wrap = require('../middleware/asyncWrapper');
const ctrl = require('../controllers/readThroughController');

router.get('/product/:id', wrap(ctrl.getProduct));
module.exports = router;
