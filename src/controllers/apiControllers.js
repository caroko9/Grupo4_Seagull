const db = require('../database/models');
const { producto, escuela } = require('../database/models');

module.exports = {
  productosList: (req, res) => {
    db.producto
      .findAll()
      .then(productos => {
        return res.status(200).json({
          total: productos.length,
          data: productos,
          status: 200
        });
      })
      .catch(error => {
        return res.status(500).json({
          error: 'Error al obtener productos',
          status: 500
        });
      });
  },
  escuelasList: (req, res) => {
    db.escuela
      .findAll()
      .then(escuela => {
        return res.status(200).json({
          total: escuela.length,
          data: escuela,
          status: 200
        });
      })
      .catch(error => {
        return res.status(500).json({
          error: 'Error al obtener escuelas',
          status: 500
        });
      });
  },
  escuelaDetails: (req, res) => {
    const escuelaId = req.params.id; 
    db.escuela
      .findOne({ where: { id: escuelaId } }) 
      .then(escuela => {
        if (!escuela) {
          return res.status(404).json({
            error: 'Escuela no encontrada',
            status: 404
          });
        }
        return res.status(200).json({
          data: escuela,
          status: 200
        });
      })
      .catch(error => {
        return res.status(500).json({
          error: 'Error al obtener detalles de la escuela',
          status: 500
        });
      });
  }
};
