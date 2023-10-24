module.exports = (req, res, next) => {
  if (req.session.usuarioLogueado) {
   
    return next();
  }
  
  return res.redirect('/');
};
