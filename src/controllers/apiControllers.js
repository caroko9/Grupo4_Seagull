const db = require('../database/models');
const { producto } = require('../database/models');

module.exports = {
  list: (req, res) => {
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
  }
}
