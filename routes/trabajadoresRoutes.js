var express = require('express');
var router = express.Router();
var trabajadoresController = require('../controllers/trabajadoresController.js');

/*
 * GET
 */
router.get('/', trabajadoresController.list);

/*
 * GET
 */
router.get('/lista', trabajadoresController.listTrabajadores);

/*
 * GET
 */
router.get('/:id', trabajadoresController.show);

/*
* SAVE POST 
*/
router.post('/', trabajadoresController.create);

/*
 * PUT
 */
router.put('/:id', trabajadoresController.update);

/*
 * DELETE
 */
router.delete('/:id', trabajadoresController.remove);

module.exports = router;