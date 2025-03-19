const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Acesso negado');
  
  jwt.verify(token, 'segredo-seguro', async (err, decoded) => {
    if (err) return res.status(403).send('Token inválido');
    req.user = await User.findById(decoded.userId);
    next();
  });
};

module.exports = authenticate; 