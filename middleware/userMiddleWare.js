// userMiddleware.js
const userMiddleware = (req, res, next) => {
    res.locals.usuarioLogueado = req.session.usuarioLogueado;
    next();
  };
  
  module.exports = userMiddleware;
  