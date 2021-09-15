const jwt = require("jsonwebtoken");
const {jwtConfig} = require('../../config.json')

exports.createJWT = (email, userId, duration) => {
  const payload = {
     email,
     userId,
     duration
  };   
  return jwt.sign(payload, jwtConfig.secret_token, {
    expiresIn: duration,
  });
};