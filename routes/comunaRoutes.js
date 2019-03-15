var express = require('express');
var router = express.Router();
var comunaController = require('../controllers/comunaController.js');

/*
 * GET
 */
router.get('/', comunaController.list);

/*
 * GET
 */
router.get('/:id', comunaController.show);

/*
 * GET
 */
router.get('/comunasregion/:codigo', comunaController.getComunasForRegion);

/*
 * POST
 */
router.post('/', comunaController.create);

/*
 * PUT
 */
router.put('/:id', comunaController.update);

/*
 * DELETE
 */
router.delete('/:id', comunaController.remove);

module.exports = router;