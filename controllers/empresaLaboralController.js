var empresaLaboralModel = require('../models/empresaLaboralModel.js');

/**
 * empresaLaboralController.js
 *
 * @description :: Server-side logic for managing empresaLaborals.
 */
module.exports = {

    /**
     * empresaLaboralController.list()
     */
    list: function (req, res) {
        empresaLaboralModel.find(function (err, empresaLaborals) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaLaboral.',
                    error: err
                });
            }
            return res.json(empresaLaborals);
        });
    },

    /**
     * empresaLaboralController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        empresaLaboralModel.findOne({_id: id}, function (err, empresaLaboral) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaLaboral.',
                    error: err
                });
            }
            if (!empresaLaboral) {
                return res.status(404).json({
                    message: 'No such empresaLaboral'
                });
            }
            return res.json(empresaLaboral);
        });
    },

    /**
     * empresaLaboralController.create()
     */
    create: function (req, res) {
        var empresaLaboral = new empresaLaboralModel(
            req.body
        );

        empresaLaboral.save(function (err, empresaLaboral) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating empresaLaboral',
                    error: err
                });
            }
            return res.status(201).json(empresaLaboral);
        });
    },

    /**
     * empresaLaboralController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        empresaLaboralModel.findOne({_id: id}, function (err, empresaLaboral) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaLaboral',
                    error: err
                });
            }
            if (!empresaLaboral) {
                return res.status(404).json({
                    message: 'No such empresaLaboral'
                });
            }

            empresaLaboral = req.body;
			
            empresaLaboral.save(function (err, empresaLaboral) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating empresaLaboral.',
                        error: err
                    });
                }

                return res.json(empresaLaboral);
            });
        });
    },

    /**
     * empresaLaboralController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        empresaLaboralModel.findByIdAndRemove(id, function (err, empresaLaboral) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the empresaLaboral.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
