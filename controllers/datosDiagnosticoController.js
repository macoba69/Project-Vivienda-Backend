var datosDiagnosticoModel = require('../models/datosDiagnosticoModel.js');

/**
 * datosDiagnosticoController.js
 *
 * @description :: Server-side logic for managing datosDiagnosticos.
 */
module.exports = {

    /**
     * datosDiagnosticoController.list()
     */
    list: function (req, res) {
        datosDiagnosticoModel.find(function (err, datosDiagnosticos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosDiagnostico.',
                    error: err
                });
            }
            return res.json(datosDiagnosticos);
        });
    },

    /**
     * datosDiagnosticoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        datosDiagnosticoModel.findOne({_id: id}, function (err, datosDiagnostico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosDiagnostico.',
                    error: err
                });
            }
            if (!datosDiagnostico) {
                return res.status(404).json({
                    message: 'No such datosDiagnostico'
                });
            }
            return res.json(datosDiagnostico);
        });
    },

    /**
     * datosDiagnosticoController.create()
     */
    create: function (req, res) {
        var datosDiagnostico = new datosDiagnosticoModel(
            req.body
        );

        datosDiagnostico.save(function (err, datosDiagnostico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating datosDiagnostico',
                    error: err
                });
            }
            return res.status(201).json(datosDiagnostico);
        });
    },

    /**
     * datosDiagnosticoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        datosDiagnosticoModel.findOne({_id: id}, function (err, datosDiagnostico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting datosDiagnostico',
                    error: err
                });
            }
            if (!datosDiagnostico) {
                return res.status(404).json({
                    message: 'No such datosDiagnostico'
                });
            }
            //datosDiagnostico = req.body;
            datosDiagnostico.rsh = req.body.rsh ? req.body.rsh : datosDiagnostico.rsh;
            datosDiagnostico.comuna = req.body.comuna ? req.body.comuna : datosDiagnostico.comuna;
            datosDiagnostico.subsidioActual = req.body.subsidioActual ? req.body.subsidioActual : datosDiagnostico.subsidioActual;
            datosDiagnostico.subsidioPostular = req.body.subsidioPostular ? req.body.subsidioPostular : datosDiagnostico.subsidioPostular;
            datosDiagnostico.dicom = req.body.dicom ? req.body.dicom : datosDiagnostico.dicom;
            datosDiagnostico.atc = req.body.atc ? req.body.atc : datosDiagnostico.atc;
            datosDiagnostico.discapacidad = req.body.discapacidad ? req.body.discapacidad : datosDiagnostico.discapacidad;
            datosDiagnostico.estadoCivil = req.body.estadoCivil ? req.body.estadoCivil : datosDiagnostico.estadoCivil;
            datosDiagnostico.renta = req.body.renta ? req.body.renta : datosDiagnostico.renta;
            datosDiagnostico.tipoContrato = req.body.tipoContrato ? req.body.tipoContrato : datosDiagnostico.tipoContrato;
            			
            datosDiagnostico.save(function (err, datosDiagnostico) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating datosDiagnostico.',
                        error: err
                    });
                }

                return res.json(datosDiagnostico);
            });
        });
    },

    /**
     * datosDiagnosticoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        datosDiagnosticoModel.findByIdAndRemove(id, function (err, datosDiagnostico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the datosDiagnostico.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
