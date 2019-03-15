var express = require('express');
var router = express.Router();
var serviciosController = require('../controllers/serviciosController.js');

/*
 * GET
 */
router.get('/', serviciosController.list);

/*
 * GET
 */
router.get('/:id', serviciosController.show);

/*
 * POST
 */
router.post('/', serviciosController.create);

/*
 * PUT
 */
router.put('/:id', serviciosController.update);

/*
 * DELETE
 */
router.delete('/:id', serviciosController.remove);

module.exports = router;
