var regionModel = require('../models/regionModel.js');

/**
 * regionController.js
 *
 * @description :: Server-side logic for managing regions.
 */
module.exports = {

    /**
     * regionController.list()
     */
    list: function (req, res) {
        regionModel.find(function (err, regions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting region.',
                    error: err
                });
            }
            return res.json(regions);
        });
    },

    /**
     * regionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        regionModel.findOne({_id: id}, function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting region.',
                    error: err
                });
            }
            if (!region) {
                return res.status(404).json({
                    message: 'No such region'
                });
            }
            return res.json(region);
        });
    },

    /**
     * regionController.create()
     */
    create: function (req, res) {
        var region = new regionModel(
            req.body
        );

        region.save(function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating region',
                    error: err
                });
            }
            return res.status(201).json(region);
        });
    },

    /**
     * regionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        console.log(req.body);
        regionModel.findOne({_id: id}, function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting region',
                    error: err
                });
            }
            if (!region) {
                return res.status(404).json({
                    message: 'No such region'
                });
            }
            region.codigo = req.body.codigo ? req.body.codigo : region.codigo;
			region.nombre  = req.body.nombre  ? req.body.nombre  : region.nombre ;
			// region.ordinal = req.body.ordinal ? req.body.ordinal : region.ordinal;
            			
            region.save(function (err, region) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating region.',
                        error: err
                    });
                }

                return res.json(region);
            });
        });
    },

    /**
     * regionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        regionModel.findByIdAndRemove(id, function (err, region) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the region.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};