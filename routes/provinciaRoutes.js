var express = require('express');
var router = express.Router();
var provinciaController = require('../controllers/provinciaController.js');

/*
 * GET
 */
router.get('/', provinciaController.list);

/*
 * GET
 */
router.get('/:id', provinciaController.show);

/*
 * POST
 */
router.post('/', provinciaController.create);

/*
 * PUT
 */
router.put('/:id', provinciaController.update);

/*
 * DELETE
 */
router.delete('/:id', provinciaController.remove);

module.exports = router;