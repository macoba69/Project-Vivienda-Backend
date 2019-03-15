var datosFamiliaresModel = require('../models/datosFamiliaresModel.js');

/**
 * datosFamiliaresController.js
 *
 * @description :: Server-side logic for managing datosFamiliaress.
 */
module.exports = {

    /**
     * datosFamiliaresController.list()
     */
    list: function (req, res) {
        datosFamiliaresModel.find(function (err, datosFamiliaress) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosFamiliares.',
                    error: err
                });
            }
            return res.json(datosFamiliaress);
        });
    },

    /**
     * datosFamiliaresController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        datosFamiliaresModel.findOne({_id: id}, function (err, datosFamiliares) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosFamiliares.',
                    error: err
                });
            }
            if (!datosFamiliares) {
                return res.status(404).json({
                    message: 'No such datosFamiliares'
                });
            }
            return res.json(datosFamiliares);
        });
    },

    /**
     * datosFamiliaresController.create()
     */
    create: function (req, res) {
        var datosFamiliares = new datosFamiliaresModel(
            req.body
        );

        datosFamiliares.save(function (err, datosFamiliares) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating datosFamiliares',
                    error: err
                });
            }
            return res.status(201).json(datosFamiliares);
        });
    },

    /**
     * datosFamiliaresController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        datosFamiliaresModel.findOne({_id: id}, function (err, datosFamiliares) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosFamiliares',
                    error: err
                });
            }
            if (!datosFamiliares) {
                return res.status(404).json({
                    message: 'No such datosFamiliares'
                });
            }

            datosFamiliares = req.body;
			
            datosFamiliares.save(function (err, datosFamiliares) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating datosFamiliares.',
                        error: err
                    });
                }

                return res.json(datosFamiliares);
            });
        });
    },

    /**
     * datosFamiliaresController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        datosFamiliaresModel.findByIdAndRemove(id, function (err, datosFamiliares) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the datosFamiliares.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
