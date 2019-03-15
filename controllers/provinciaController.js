var provinciaModel = require('../models/provinciaModel.js');

/**
 * provinciaController.js
 *
 * @description :: Server-side logic for managing provincias.
 */
module.exports = {

    /**
     * provinciaController.list()
     */
    list: function (req, res) {
        provinciaModel.find(function (err, provincias) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting provincia.',
                    error: err
                });
            }
            return res.json(provincias);
        });
    },

    /**
     * provinciaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        provinciaModel.findOne({_id: id}, function (err, provincia) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting provincia.',
                    error: err
                });
            }
            if (!provincia) {
                return res.status(404).json({
                    message: 'No such provincia'
                });
            }
            return res.json(provincia);
        });
    },

    /**
     * provinciaController.create()
     */
    create: function (req, res) {
        var provincia = new provinciaModel(
            req.body
        );

        provincia.save(function (err, provincia) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating provincia',
                    error: err
                });
            }
            return res.status(201).json(provincia);

        });
    },

    /**
     * provinciaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        provinciaModel.findOne({_id: id}, function (err, provincia) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting provincia',
                    error: err
                });
            }
            if (!provincia) {
                return res.status(404).json({
                    message: 'No such provincia'
                });
            }
            
            provincia.codigo = req.body.codigo ? req.body.codigo : provincia.codigo;
			provincia.nombre = req.body.nombre ? req.body.nombre : provincia.nombre;
            provincia.regionId = req.body.regionId ? req.body.regionId : comuna.regionId;
			
            provincia.save(function (err, provincia) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating provincia.',
                        error: err
                    });
                }

                return res.json(provincia);
            });
        });
    },

    /**
     * provinciaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        provinciaModel.findByIdAndRemove(id, function (err, provincia) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the provincia.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};