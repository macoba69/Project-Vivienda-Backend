var express = require('express');
var router = express.Router();
var etapasProcesoController = require('../controllers/etapasProcesoController.js');

/*
 * GET
 */
router.get('/', etapasProcesoController.list);

/*
 * GET
 */
router.get('/:id', etapasProcesoController.show);

/*
 * POST
 */
router.post('/', etapasProcesoController.create);

/*
 * PUT
 */
router.put('/:id', etapasProcesoController.update);

/*
 * DELETE
 */
router.delete('/:id', etapasProcesoController.remove);

module.exports = router;
