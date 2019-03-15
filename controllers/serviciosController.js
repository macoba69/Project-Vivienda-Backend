var serviciosModel = require('../models/serviciosModel.js');

/**
 * serviciosController.js
 *
 * @description :: Server-side logic for managing servicioss.
 */
module.exports = {

    /**
     * serviciosController.list()
     */
    list: function (req, res) {
        serviciosModel.find(function (err, servicioss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting servicios.',
                    error: err
                });
            }
            return res.json(servicioss);
        });
    },

    /**
     * serviciosController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        serviciosModel.findOne(
            {_id: id}, function (err, servicios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting servicios.',
                    error: err
                });
            }
            if (!servicios) {
                return res.status(404).json({
                    message: 'No such servicios'
                });
            }
            return res.json(servicios);
        });
    },

    /**
     * serviciosController.create()
     */
    create: function (req, res) {
        var servicios = new serviciosModel(
            req.body
        );

        servicios.save(function (err, servicios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating servicios',
                    error: err
                });
            }
            return res.status(201).json(servicios);
        });
    },

    /**
     * serviciosController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        serviciosModel.findOne({_id: id}, function (err, servicios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting servicios',
                    error: err
                });
            }
            if (!servicios) {
                return res.status(404).json({
                    message: 'No such servicios'
                });
            }

            servicios = req.body;
			
            servicios.save(function (err, servicios) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating servicios.',
                        error: err
                    });
                }

                return res.json(servicios);
            });
        });
    },

    /**
     * serviciosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        serviciosModel.findByIdAndRemove(id, function (err, servicios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the servicios.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
