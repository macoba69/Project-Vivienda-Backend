var comunaModel = require('../models/comunaModel.js');

/**
 * comunaController.js
 *
 * @description :: Server-side logic for managing comunas.
 */
module.exports = {

    /**
     * comunaController.list()
     */
    list: function (req, res) {
        comunaModel.find(function (err, comunas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comuna.',
                    error: err
                });
            }
            return res.json(comunas);
        });
    },

    /**
     * comunasController.getComunasForRegion()
     */
    getComunasForRegion: function (req, res) {
       
        var codigo = req.params.codigo;
        comunaModel.find({codigo: codigo}, function (err, comuna) {
        console.log('comunas monstrar', req.params)
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comunas.',
                    error: err
                });
            }
            return res.json(comuna);
        });
    },

    /**
     * comunaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        comunaModel.findOne({_id: id}, function (err, comuna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comuna.',
                    error: err
                });
            }
            if (!comuna) {
                return res.status(404).json({
                    message: 'No such comuna'
                });
            }
            return res.json(comuna);
        });
    },

    /**
     * comunaController.create()
     */
    create: function (req, res) {
        var comuna = new comunaModel(
            req.body
            //codigo : req.body.codigo,
			//nombre : req.body.nombre,
            //provinciaId : req.body.provinciaId
        );

        comuna.save(function (err, comuna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating comuna',
                    error: err
                });
            }
            return res.status(201).json(comuna);
        });
    },

    /**
     * comunaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        comunaModel.findOne({_id: id}, function (err, comuna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comuna',
                    error: err
                });
            }
            if (!comuna) {
                return res.status(404).json({
                    message: 'No such comuna'
                });
            }

            comuna.codigo = req.body.codigo ? req.body.codigo : comuna.codigo;
			comuna.nombre = req.body.nombre ? req.body.nombre : comuna.nombre;
            comuna.provinciaId = req.body.provinciaId ? req.body.provinciaId : comuna.provinciaId;
            
            comuna.save(function (err, comuna) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating comuna.',
                        error: err
                    });
                }

                return res.json(comuna);
            });
        });
    },

    /**
     * comunaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        comunaModel.findByIdAndRemove(id, function (err, comuna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the comuna.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};