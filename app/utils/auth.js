const jwt = require("jsonwebtoken");
const {jwtConfig} = require('../../config.json');


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


exports.authentificateToken = (req,res,next)=>{
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[0];

  jwt.verify(token,jwtConfig.secret_token,(err,user)=>{
    if(err){
      console.log("error")
      return res.status(403).json("invalid token");
    } 
    req.user = user;

    next();
  });
  


}