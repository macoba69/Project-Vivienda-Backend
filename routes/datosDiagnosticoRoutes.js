var express = require('express');
var router = express.Router();
var datosDiagnosticoController = require('../controllers/datosDiagnosticoController.js');

/*
 * GET
 */
router.get('/', datosDiagnosticoController.list);

/*
 * GET
 */
router.get('/:id', datosDiagnosticoController.show);

/*
 * POST
 */
router.post('/', datosDiagnosticoController.create);

/*
 * PUT
 */
router.put('/:id', datosDiagnosticoController.update);

/*
 * DELETE
 */
router.delete('/:id', datosDiagnosticoController.remove);

module.exports = router;
