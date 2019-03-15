var trabajadoresModel = require('../models/trabajadoresModel.js');

/**
 * trabajadoresController.js
 *
 * @description :: Server-side logic for managing trabajadoress.
 */
module.exports = {

    /**
     * trabajadoresController.list()
     */
    list: function (req, res) {
        // trabajadoresModel.aggregate([
        //     {
        //         $lookup: {
        //             from: 'empresaconvenios',
        //             localField: 'empresaConvenioId',
        //             foreignField: '_id',
        //             as: 'empresaConvenioId'
        //        }
        //     },
        //    {
        //         $lookup: {
        //             from: 'empresalaborals',
        //             localField: 'empresaLaboralId',
        //             foreignField: '_id',
        //             as: 'empresaLaboralId'
        //        }
        //    },
        //        {
        //         $lookup: {
        //             from: 'datosahorros',
        //             localField: 'ahorros',
        //             foreignField: '_id',
        //             as: 'ahorros'
        //        }
        //    },           
        //    {
        //         $lookup: {
        //             from: 'datosdiagnosticos',
        //             localField: 'datosDiagnosticoId',
        //             foreignField: '_id',
        //             as: 'datosDiagnosticoId'
        //        }
        //    },
        //    {
        //         $lookup: {
        //             from: 'datosfamiliares',
        //             localField: 'familiares',
        //             foreignField: '_id',
        //             as: 'familiares'
        //        }
        //    },
        //    {
        //         $lookup: {
        //             from: 'etapasprocesos',
        //             localField: 'etapas',
        //             foreignField: '_id',
        //             as: 'etapas'
        //        }
        //    },
        //    {
        //         $lookup: {
        //             from: 'atenciones',
        //             localField: 'atenciones',
        //             foreignField: '_id',
        //             as: 'atenciones'
        //        }
        //    }
        // ],function (err, trabajadores) {
        //     if (err) {
        //         return res.status(500).json({
        //             message: 'Error when getting trabajadores.',
        //             error: err
        //         });
        //     }
        //     return res.json(trabajadores);
        // });
    },

     /**
     * trabajadoresController.list()
     */
    listTrabajadores: function (req, res) {
        trabajadoresModel.aggregate([
            {
                $lookup: {
                    from: 'empresaconvenios',
                    localField: 'empresaConvenioId',
                    foreignField: '_id',
                    as: 'empresaConvenioId'
               }
            },
            {
                $lookup: {
                    from: 'empresalaborals',
                    localField: 'empresaLaboralId',
                    foreignField: '_id',
                    as: 'empresaLaboralId'
                }
            },
            {
                $lookup: {
                    from: 'datosAhorros',
                    localField: 'datosAhorrosId',
                    foreignField: '_id',
                    as: 'datosAhorrosId'
                }
            },
            {
                $lookup: {

                    from: 'datosdiagnosticos',
                    localField: 'datosDiagnosticoId',
                    foreignField: '_id',
                    as: 'datosDiagnosticoId'
                }
            },
            {
                $lookup: {
                    from: 'datosfamiliares',
                    localField: 'datosFamiliaresId',
                    foreignField: '_id',
                    as: 'datosFamiliaresId'
                }
            },
            {
                $lookup: {
                    from: 'etapasprocesos',
                    localField: 'etapasProcesoId',
                    foreignField: '_id',
                    as: 'etapasProcesoId'
                }
            },
            {
                $lookup: {
                    from: 'atenciones',
                    localField: 'atencionesId',
                    foreignField: '_id',
                    as: 'atencionesId'
                }
            }

        ], function (err, trabajadoress) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trabajadores.',
                    error: err
                });
            }
            return res.json({
                listaTrabajadores: trabajadoress,

            });
        });
    },

    /**
     * trabajadoresController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        trabajadoresModel.findOne(
            {_id: id}, function (err, trabajadores) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when getting trabajadores.',
                        error: err
                    });
                }
                if (!trabajadores) {
                    return res.status(404).json({
                        message: 'No such trabajadores'
                    });
                }
                return res.json(trabajadores);
            });
    },

    /**
     * trabajadoresController.create()
     */
    create: function (req, res) {
        console.log('req', req.body);
        var trabajadores = new trabajadoresModel(
            req.body
          
    ); 

        trabajadores.save(function (err, trabajadores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating trabajadores',
                    error: err
                });
            }
            return res.status(201).json(trabajadores);
        });
    },

    /**
     * trabajadoresController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        trabajadoresModel.findOne({_id: id}, function (err, trabajadores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trabajadores',
                    error: err
                });
            }
            if (!trabajadores) {
                return res.status(404).json({
                    message: 'No such trabajadores'
                });
            }
             console.log('trabajadores: ', trabajadores);
             trabajadores = req.body;

            //  trabajadores.empresaConvenioId = req.body.empresaConvenioId ? req.body.empresaConvenioId : trabajadores.empresaConvenioId;
            //  trabajadores.rut  = req.body.rut ? req.body.rut : trabajadores.rut ;      
            
            trabajadores.save(function (err, trabajadores) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating trabajadores.',
                        error: err
                    });
                }

                return res.json(trabajadores);
            });
        });
    },

   /**
     * trabajadoresController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        trabajadoresModel.findByIdAndRemove(id, function (err, trabajadores) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the trabajadores.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
