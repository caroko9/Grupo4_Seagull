const db = require ('../database/models');
const op = db.sequelize.op;

module.exports = {
list: (req, res) => {
    db.producto
        .findAll()
            .then(producto => {
            return res.status.json({
            total: producto.length,
            data: producto,
            status: 200
            })
            })
}
}