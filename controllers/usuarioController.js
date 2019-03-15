var usuarioModel = require('../models/usuarioModel.js');

/**
 * usuarioController.js
 *
 * @description :: Server-side logic for managing usuarios.
 */
module.exports = {

    /**
     * usuarioController.list()
     */
    list: function (req, res) {
        usuarioModel.find(function (err, usuarios) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario.',
                    error: err
                });
            }
            return res.json(usuarios);
        });
    },

    /**
     * usuarioController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        usuarioModel.findOne({_id: id}, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario.',
                    error: err
                });
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No such usuario'
                });
            }
            return res.json(usuario);
        });
    },

    /**
     * usuarioController.create()
     */
    create: function (req, res) {
        var usuario = new usuarioModel({
			nombres : req.body.nombres,
			apellidoPaterno : req.body.apellidoPaterno,
			apellidoMaterno : req.body.apellidoMaterno,
			nombreUsuario : req.body.nombreUsuario,
			password : req.body.password,
			estado : req.body.estado,
			permisos : req.body.permisos,
			email : req.body.email

        });

        usuario.save(function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating usuario',
                    error: err
                });
            }
            return res.status(201).json(usuario);
        });
    },

    /**
     * usuarioController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        usuarioModel.findOne({_id: id}, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usuario',
                    error: err
                });
            }
            if (!usuario) {
                return res.status(404).json({
                    message: 'No such usuario'
                });
            }

            usuario.nombres = req.body.nombres ? req.body.nombres : usuario.nombres;
			usuario.apellidoPaterno = req.body.apellidoPaterno ? req.body.apellidoPaterno : usuario.apellidoPaterno;
			usuario.apellidoMaterno = req.body.apellidoMaterno ? req.body.apellidoMaterno : usuario.apellidoMaterno;
			usuario.nombreUsuario = req.body.nombreUsuario ? req.body.nombreUsuario : usuario.nombreUsuario;
			usuario.password = req.body.password ? req.body.password : usuario.password;
			usuario.estado = req.body.estado ? req.body.estado : usuario.estado;
			usuario.permisos = req.body.permisos ? req.body.permisos : usuario.permisos;
			usuario.email = req.body.email ? req.body.email : usuario.email;
			
            usuario.save(function (err, usuario) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating usuario.',
                        error: err
                    });
                }

                return res.json(usuario);
            });
        });
    },

    /**
     * usuarioController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        usuarioModel.findByIdAndRemove(id, function (err, usuario) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the usuario.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
