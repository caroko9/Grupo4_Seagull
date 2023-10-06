const db = require('../database/models');
const { escuela } = require('../database/models'); 

const controller = {

  sumaEscuela: (req, res) => {
    res.render("escuelascreate");
  },
  creaEscuela: async (req, res) => {
    try {
      const escuelaNueva = req.body;
      const escuelaimgUpload = req.files; 
      const primeraImagen = escuelaimgUpload[0].filename;

      
      const imagenCloudinaryURL = `https://res.cloudinary.com/djpb4ilrq/image/upload/${primeraImagen}`;

      const nuevaEscuela = await db.escuela.create({
        nombre: escuelaNueva.nombre,
        email: escuelaNueva.email,
        descripcion: escuelaNueva.descripcion,
        pais: escuelaNueva.pais,
        imagen: imagenCloudinaryURL, 
      });
      
      res.redirect("./escuelasList");
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al crear la escuela: ${error.message}`);
    }
  },

  list: async (req, res) => {
    try {
      const escuelasRegistradas = await db.escuela.findAll();
      res.render("escuelasList", { escuelasRegistradas });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener la lista de escuelas');
    }
  },

  gestionEscuela: async (req, res) => {
    try {
      const escuelasRegistradas = await db.escuela.findAll();
      res.render("gestion_escuela", { escuelasRegistradas });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener la lista de escuelas');
    }
  },

  buscarEscuela: async (req, res) => {
    try {
      const escuelaEncontrada = req.query.buscar;
      const escuelasBuscadasArray = await db.Escuela.findAll({
        where: {
          nombre: {
            [db.Sequelize.Op.iLike]: `%${escuelaEncontrada}%`,
          },
        },
      });

      res.render("escuelasResults", { escuelasBuscadas: escuelasBuscadasArray });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al buscar escuelas');
    }
  },

  idEscuela: async (req, res) => {
    try {
      const escuelaId = req.params.id;
      const escuela = await db.escuela.findByPk(escuelaId);

      if (!escuela) {
        return res.status(404).send("Escuela no encontrada");
      }

      res.render('escuela-detalle', { escuela });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los detalles de la escuela');
    }
  },

  escuelaAdmin: async (req, res) => {
    try {
      const escuelaId = req.params.id;
      const escuela = await db.escuela.findByPk(escuelaId);

      if (!escuela) {
        return res.status(404).send("Escuela no encontrada");
      }

      res.render('escuelaAdmin', { escuela });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los detalles de la escuela');
    }
  },
  
editarEscuela: async (req, res) => {
    try {
      const escuelaId = req.params.id;
      const escuela = await db.escuela.findByPk(escuelaId);
  
      if (!escuela) {
        return res.status(404).send("Escuela no encontrada");
      }
  
      // Registros de consola para verificar los datos recibidos
      console.log("ID de la escuela:", escuelaId);
      console.log("Nombre nuevo:", req.body.nombre);
      console.log("Email nuevo:", req.body.email);
      console.log("Descripción nueva:", req.body.descripcion);
      console.log("País nuevo:", req.body.pais);
  
      if (req.method === "GET") {
        res.render("editarEscuela", { escuela });
      } else if (req.method === "POST") {
        const nombreNuevo = req.body.nombre;
        const emailNuevo = req.body.email;
        const descripcionNueva = req.body.descripcion;
        const paisNuevo = req.body.pais;
  
        // Realiza la actualización en la base de datos aquí usando los datos anteriores
        await escuela.update({
          nombre: nombreNuevo,
          email: emailNuevo,
          descripcion: descripcionNueva,
          pais: paisNuevo,
        });
  
        // Vuelve a consultar la escuela después de la actualización
        const escuelaActualizada = await db.escuela.findByPk(escuelaId);
  
        // Verifica los cambios en la escuela actualizada
        console.log("Escuela actualizada:", escuelaActualizada);
  
        res.redirect(`/escuelas/escuela-detalle/${escuelaId}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al editar la escuela');
    }
  },
  
  
  
  
};

module.exports = controller;
