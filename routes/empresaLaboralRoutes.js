var express = require('express');
var router = express.Router();
var empresaLaboralController = require('../controllers/empresaLaboralController.js');

/*
 * GET
 */
router.get('/', empresaLaboralController.list);

/*
 * GET
 */
router.get('/:id', empresaLaboralController.show);

/*
 * POST
 */
router.post('/', empresaLaboralController.create);

/*
 * PUT
 */
router.put('/:id', empresaLaboralController.update);

/*
 * DELETE
 */
router.delete('/:id', empresaLaboralController.remove);

module.exports = router;
