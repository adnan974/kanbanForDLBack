const jwt = require("jsonwebtoken");

try{
  var {jwtConfig} = require('../../config.json');
}
catch(err){
  var jwtConfig = "";
}


exports.createJWT = (email, userId, duration) => {
  const payload = {
     email,
     userId,
     duration
  };   

  const token = process.env.SECRET_TOKEN || jwtConfig.secret_token

  return jwt.sign(payload, token, {
    expiresIn: duration,
  });
};


exports.authentificateToken = (req,res,next)=>{
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[0];
  
  const secretToken = process.env.SECRET_TOKEN || jwtConfig.secret_token;

  jwt.verify(token,secretToken,(err,user)=>{
    if(err){
      console.log("error")
      return res.status(403).json("invalid token");
    } 
    req.user = user;

    next();
  });
  


}