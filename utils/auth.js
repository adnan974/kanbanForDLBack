const jwt = require("jsonwebtoken");

exports.createJWT = (email, userId, duration) => {
  const payload = {
     email,
     userId,
     duration
  };   
  console.log(process.env.TOKEN_SECRET)
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: duration,
  });
};