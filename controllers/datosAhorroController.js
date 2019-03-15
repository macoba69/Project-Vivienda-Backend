var datosAhorroModel = require('../models/datosAhorroModel.js');

/**
 * datosAhorroController.js
 *
 * @description :: Server-side logic for managing datosAhorros.
 */
module.exports = {

    /**
     * datosAhorroController.list()
     */
    list: function (req, res) {
        datosAhorroModel.find(function (err, datosAhorros) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosAhorro.',
                    error: err
                });
            }
            return res.json(datosAhorros);
        });
    },

    /**
     * datosAhorroController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        datosAhorroModel.findOne({_id: id}, function (err, datosAhorro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosAhorro.',
                    error: err
                });
            }
            if (!datosAhorro) {
                return res.status(404).json({
                    message: 'No such datosAhorro'
                });
            }
            return res.json(datosAhorro);
           
        });
    },

    /**
     * datosAhorroController.create()
     */
    create: function (req, res) {
        var datosAhorro = new datosAhorroModel(
            req.body
        );

        datosAhorro.save(function (err, datosAhorro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating datosAhorro',
                    error: err
                });
            }
            return res.status(201).json(datosAhorro);
        });
    },

    /**
     * datosAhorroController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        datosAhorroModel.findOne({_id: id}, function (err, datosAhorro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosAhorro',
                    error: err
                });
            }
            if (!datosAhorro) {
                return res.status(404).json({
                    message: 'No such datosAhorro'
                });
            }

            datosAhorro = req.body;
			
            datosAhorro.save(function (err, datosAhorro) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating datosAhorro.',
                        error: err
                    });
                }

                return res.json(datosAhorro);
            });
        });
    },

    /**
     * datosAhorroController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        datosAhorroModel.findByIdAndRemove(id, function (err, datosAhorro) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the datosAhorro.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
