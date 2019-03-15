var express = require('express');
var router = express.Router();
var datosFamiliaresController = require('../controllers/datosFamiliaresController.js');

/*
 * GET
 */
router.get('/', datosFamiliaresController.list);

/*
 * GET
 */
router.get('/:id', datosFamiliaresController.show);

/*
 * POST
 */
router.post('/', datosFamiliaresController.create);

/*
 * PUT
 */
router.put('/:id', datosFamiliaresController.update);

/*
 * DELETE
 */
router.delete('/:id', datosFamiliaresController.remove);

module.exports = router;