var atencionesModel = require('../models/atencionesModel.js');
var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://postgres:orion@127.0.0.1:5432/sistrac';
var connectionString = 'postgres://postgres:orion@190.153.224.123:5432/sistrac';
var db = pgp(connectionString);

/**
 * atencionesController.js
 *
 * @description :: Server-side logic for managing atenciones.
 */
module.exports = {

    /**
     * atencionesController.list()
     */
    listAtencionesistrac: function (req, res) {
        query = `SELECT atencion_id_estado, atencion_estado_texto, id_registro, id_persona, persona_id_convenio, rut, dv, nombres, appaterno, apmaterno, persona_nombre, fecha, convenio_fecha, tema, gestion, inobs, pro_nombre, comuna, nomregion
                    FROM public."atencionesNuevas";`;
        query2 = `SELECT COUNT(*) FROM public."atencionesNuevas";`
        query3 =`SELECT COUNT(id_persona) 	FROM areavivienda.tblpersonas WHERE persona_id_estado=1;`;
        query4 = `SELECT * FROM public."ordenesDeAtencion"
                    WHERE orden_estado_texto IN ('Pendiente','Finiquitado','En obra, no ubicado','En obra, no asistió','En obra, no disponible','En obra, Licencia Medica','En obra, Vacaciones','En obra, dia libre')
                  ORDER BY id_ordenatt`;
        query5 = `SELECT COUNT(*) FROM public."ordenesDeAtencion"
                    WHERE orden_estado_texto IN ('Pendiente','Finiquitado','En obra, no ubicado','En obra, no asistió','En obra, no disponible','En obra, Licencia Medica','En obra, Vacaciones','En obra, dia libre')`;    
        db.any(query)
        .then(function (atenciones) {
            db.any(query2)
            .then(function (totalAtenciones) {
                db.any(query3)
                .then(function (totalTrabajadores) {
                    db.any(query4)
                    .then(function (ordenesDeAtencion) {
                        db.any(query4)
                        .then(function (totalOrdenesDeAtencion) {
                            res.json({
                              listaAtenciones: atenciones,
                              totalAtencionesClasificar: totalAtenciones,
                              totalTrabajadoresConvenioActivo: totalTrabajadores,
                              listaOrdenesAtencion: ordenesDeAtencion,
                              totalOrdenesAtencion: totalOrdenesDeAtencion
                            });
                        })
                        .catch(function (err) {
                            return res.status(500).json({
                                message: 'Error when getting atencion.',
                                error: err
                            });
                        });                
                        })
                    .catch(function (err) {
                        return res.status(500).json({
                            message: 'Error when getting atencion.',
                            error: err
                        });
                    });                
                })
                .catch(function (err) {
                    return res.status(500).json({
                        message: 'Error when getting atencion.',
                        error: err
                    });
                });
            })
            .catch(function (err) {
                return res.status(500).json({
                    message: 'Error when getting atencion.',
                    error: err
                });
            });
        })
        .catch(function (err) {
            return res.status(500).json({
                message: 'Error when getting atencion.',
                error: err
            });
        });
    },

    /**
     * atencionesController.list()
     */
    list: function (req, res) {
        atencionesModel.find(function (err, atenciones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting atenciones.',
                    error: err
                });
            }
            return res.json(atenciones);
        });
    },

    /**
     * atencionesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        atencionesModel.findOne({_id: id}, function (err, atenciones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting atenciones.',
                    error: err
                });
            }
            if (!atenciones) {
                return res.status(404).json({
                    message: 'No such atenciones'
                });
            }
            return res.json(atenciones);
        });
    },

    /**
     * atencionesController.create()
     */
    create: function (req, res) {
        var atenciones = new atencionesModel(
            req.body
        );

        atenciones.save(function (err, atenciones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating atenciones',
                    error: err
                });
            }
            return res.status(201).json(atenciones);
        });
    },

    /**
     * atencionesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        atencionesModel.findOne({_id: id}, function (err, atenciones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting atenciones',
                    error: err
                });
            }
            if (!atenciones) {
                return res.status(404).json({
                    message: 'No such atenciones'
                });
            }

            atenciones = req.body;
			
            atenciones.save(function (err, atenciones) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating atenciones.',
                        error: err
                    });
                }

                return res.json(atenciones);
            });
        });
    },

    /**
     * atencionesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        atencionesModel.findByIdAndRemove(id, function (err, atenciones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the atenciones.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
