var express = require('express');
var router = express.Router();
var atencionesController = require('../controllers/atencionesController.js');

/*
 * GET
 */
router.get('/', atencionesController.list);

/*
 * GET
 */
router.get('/lista', atencionesController.listAtencionesistrac);

/*
 * GET
 */
router.get('/:id', atencionesController.show);

/*
 * POST
 */
router.post('/', atencionesController.create);

/*
 * PUT
 */
router.put('/:id', atencionesController.update);

/*
 * DELETE
 */
router.delete('/:id', atencionesController.remove);

module.exports = router;
