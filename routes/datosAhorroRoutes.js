var express = require('express');
var router = express.Router();
var datosAhorroController = require('../controllers/datosAhorroController.js');

/*
 * GET
 */
router.get('/', datosAhorroController.list);

/*
 * GET
 */
router.get('/:id', datosAhorroController.show);

/*
 * POST
 */
router.post('/', datosAhorroController.create);

/*
 * PUT
 */
router.put('/:id', datosAhorroController.update);

/*
 * DELETE
 */
router.delete('/:id', datosAhorroController.remove);

module.exports = router;