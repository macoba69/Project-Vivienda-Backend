var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController.js');

/*
 * GET
 */
router.get('/', usuarioController.list);

/*
 * GET
 */
router.get('/:id', usuarioController.show);

/*
 * POST
 */
router.post('/', usuarioController.create);

/*
 * PUT
 */
router.put('/:id', usuarioController.update);

/*
 * DELETE
 */
router.delete('/:id', usuarioController.remove);

module.exports = router;
