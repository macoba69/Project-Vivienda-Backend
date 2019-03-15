var etapasProcesoModel = require('../models/etapasProcesoModel.js');

/**
 * etapasProcesoController.js
 *
 * @description :: Server-side logic for managing etapasProcesos.
 */
module.exports = {

    /**
     * etapasProcesoController.list()
     */
    list: function (req, res) {
        etapasProcesoModel.find(function (err, etapasProcesos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting etapasProceso.',
                    error: err
                });
            }
            return res.json(etapasProcesos);
        });
    },

    /**
     * etapasProcesoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        etapasProcesoModel.findOne({_id: id}, function (err, etapasProceso) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting etapasProceso.',
                    error: err
                });
            }
            if (!etapasProceso) {
                return res.status(404).json({
                    message: 'No such etapasProceso'
                });
            }
            return res.json(etapasProceso);
        });
    },

    /**
     * etapasProcesoController.create()
     */
    create: function (req, res) {
        var etapasProceso = new etapasProcesoModel(
            req.body
        );

        etapasProceso.save(function (err, etapasProceso) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating etapasProceso',
                    error: err
                });
            }
            return res.status(201).json(etapasProceso);
        });
    },

    /**
     * etapasProcesoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        etapasProcesoModel.findOne({_id: id}, function (err, etapasProceso) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting etapasProceso',
                    error: err
                });
            }
            if (!etapasProceso) {
                return res.status(404).json({
                    message: 'No such etapasProceso'
                });
            }

            etapasProceso = req.body;
			
            etapasProceso.save(function (err, etapasProceso) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating etapasProceso.',
                        error: err
                    });
                }

                return res.json(etapasProceso);
            });
        });
    },

    /**
     * etapasProcesoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        etapasProcesoModel.findByIdAndRemove(id, function (err, etapasProceso) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the etapasProceso.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};