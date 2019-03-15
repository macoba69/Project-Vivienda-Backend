var express = require('express');
var router = express.Router();
var empresaConvenioController = require('../controllers/empresaConvenioController.js');

/*
 * GET
 */
router.get('/', empresaConvenioController.list);

/*
 * GET
 */
router.get('/lista', empresaConvenioController.listempresaConvenio);

/*
 * GET
 */
router.get('/:id', empresaConvenioController.show);

/*
 * POST
 */
router.post('/', empresaConvenioController.create);

/*
 * PUT
 */
router.put('/:id', empresaConvenioController.update);

/*
 * DELETE
 */
router.delete('/:id', empresaConvenioController.remove);

module.exports = router;