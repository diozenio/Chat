const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.cookies['token']
  if (!authHeader) {
    return res.redirect('/');
  }
  const parts = authHeader.split(" ");
  if (!parts.length === 2) {
    return res.redirect('/');
  }
  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    return res.redirect('/');
  }
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
        return res.redirect('/');
    }
    req.username = decoded.username;
    return next();
  });
};
