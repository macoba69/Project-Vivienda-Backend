var empresaConvenioModel = require('../models/empresaConvenioModel.js');

/**
 * empresaConvenioController.js
 *
 * @description :: Server-side logic for managing empresaConvenios.
 */
module.exports = {

    /**
     * empresaConvenioController.list()
     */
    list: function (req, res) {
        empresaConvenioModel.find(function (err, empresaConvenios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaConvenio.',
                    error: err
                });
            }
            return res.json(empresaConvenios);
        });
    },

     /**
     * empresaConvenioController.list()
     */
    listempresaConvenio: function (req, res) {
        // empresaConvenioModel.aggregate([
        //     {
        //         $lookup: {
        //             from: 'empresaconvenios',
        //             localField: 'empresaConvenioId',
        //             foreignField: '_id',
        //             as: 'empresaConvenioId'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'empresalaborals',
        //             localField: 'empresaLaboralId',
        //             foreignField: '_id',
        //             as: 'empresaLaboralId'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'datosAhorros',
        //             localField: 'datosAhorrosId',
        //             foreignField: '_id',
        //             as: 'datosAhorrosId'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'datosdiagnosticos',
        //             localField: 'datosDiagnosticoId',
        //             foreignField: '_id',
        //             as: 'datosDiagnosticoId'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'datosfamiliares',
        //             localField: 'datosFamiliaresId',
        //             foreignField: '_id',
        //             as: 'datosFamiliaresId'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'etapasprocesos',
        //             localField: 'etapasProcesoId',
        //             foreignField: '_id',
        //             as: 'etapasProcesoId'
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'atenciones',
        //             localField: 'atencionesId',
        //             foreignField: '_id',
        //             as: 'atencionesId'
        //         }
        //     }

        // ], function (err, empresaConvenios) {
        //     if (err) {
        //         return res.status(500).json({
        //             message: 'Error when getting empresaConvenios.',
        //             error: err
        //         });
        //     }
        //     return res.json({
        //         listaEmpresaConvenios: empresaConvenios,

        //     });
        // });
        empresaConvenioModel.find(function (err, empresaConvenios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaConvenio.',
                    error: err
                });
            }
            return res.json(empresaConvenios);
        });
    },

    /**
     * empresaConvenioController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        empresaConvenioModel.findOne({_id: id}, function (err, empresaConvenio) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaConvenio.',
                    error: err
                });
            }
            if (!empresaConvenio) {
                return res.status(404).json({
                    message: 'No such empresaConvenio'
                });
            }
            return res.json(empresaConvenio);
        });
    },

    /**
     * empresaConvenioController.create()
     */
    create: function (req, res) {
        console.log('req: ', req);
        var empresaConvenio = new empresaConvenioModel(
            req.body
        );

        empresaConvenio.save(function (err, empresaConvenio) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating empresaConvenio',
                    error: err
                });
            }
            return res.status(201).json(empresaConvenio);
        });
    },

    /**
     * empresaConvenioController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        empresaConvenioModel.findOne({_id: id}, function (err, empresaConvenio) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting empresaConvenio',
                    error: err
                });
            }
            if (!empresaConvenio) {
                return res.status(404).json({
                    message: 'No such empresaConvenio'
                });
            }

            empresaConvenio.rut = req.body.rut ? req.body.rut : empresaConvenio.rut;
			empresaConvenio.dv = req.body.dv ? req.body.dv : empresaConvenio.dv;
			empresaConvenio.razonSocial = req.body.razonSocial ? req.body.razonSocial : empresaConvenio.razonSocial;
			empresaConvenio.servicioSocial = req.body.servicioSocial ? req.body.servicioSocial : empresaConvenio.servicioSocial;
			
            empresaConvenio.save(function (err, empresaConvenio) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating empresaConvenio.',
                        error: err
                    });
                }

                return res.json(empresaConvenio);
            });
        });
    },

    /**
     * empresaConvenioController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        empresaConvenioModel.findByIdAndRemove(id, function (err, empresaConvenio) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the empresaConvenio.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
