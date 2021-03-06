var Userdb = require('../model/model');

// CARGAR TODOS LOS CERTIFICADOS
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Usuario no encontrado con el ID: " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error cargando usuario con ID: " + id })
            })

    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Ocurrio un error mientras cargabamos la información." })
            })
    }
}

// CREAR NUEVO CERTIFICADO
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Campo no puede estar vacío!" });
        return;
    }
    // DEFINO OBJETO USER
    const user = new Userdb({
        ci: req.body.ci,
        nombres: req.body.nombres,
        centro: req.body.centro,
        edad: req.body.edad,
        vacuna: req.body.vacuna,
        fechaPrimeraDosis: req.body.fechaPrimeraDosis,
        fechaSegundaDosis: req.body.fechaSegundaDosis,
        vacunadorPrimeraDosis: req.body.vacunadorPrimeraDosis,
        vacunadorSegundaDosis: req.body.vacunadorSegundaDosis,
        lotePrimeraDosis: req.body.lotePrimeraDosis,
        loteSegundaDosis: req.body.loteSegundaDosis,
    })

    // GUARDAR EN DB
    user.save(user)
        .then(data => {
            res.redirect('/');
            res.send({ message: "Certificado registrado correctamente." })
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Ocurrio un error mientras creabamos el certificado." });
        });
}

// ACTUALIZAR CERTIFICADO
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Campo no puede estar vacío." })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No se puede actualziar usuario con ID: ${id}.` })
            } else {                
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al actualizar certificado." })
        })
}

// ELIMINAR CERTIFICADO
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No se puede eliminar el certificado con ID: ${id}.` })
            } else {
                res.send({
                    message: "Certificado eliminado correctamente."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se puede eliminar el certificado con ID: " + id
            });
        });
}