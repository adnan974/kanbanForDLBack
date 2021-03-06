
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const expressSwagger = require('express-swagger-generator')(app);
try {
  var { mongodbConfig } = require('./config.json');
}
catch (err) {
  console.log("erreur");
  var mongodbConfig = "";
}


// // Todo: a modifier
// const {scheduler} = require('./app/utils/jobs')

// // Scheduled task
// scheduler();

// import routes
const routes = require('./app/routes');

// database
const mongoDbOptions = {
  "useNewUrlParser": true,
  "useUnifiedTopology": true
}
mongoose
  .connect(process.env.DATABASE_URL || mongodbConfig.databaseUrl, mongoDbOptions)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Mongoose connection error to database: ', err.message));

// middlewares
app.use(bodyParser.json());
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

//routes middleware
app.use('/api', routes);

//Swagger
const _swaggerConfig = {
  "info": {
    "description": "This is a sample server",
    "title": "Swagger",
    "version": "1.0.0"
  },
  "host": process.env.SWAGGER_HOST || "localhost:3000",
  "basePath": "/api",
  "produces": [
    "application/json",
    "application/xml"
  ],
  "schemes": [
    "http",
    "https"
  ],
  "securityDefinitions": {
    "JWT": {
      "type": "apiKey",
      "in": "header",
      "name": "Authorization",
      "description": ""
    }
  }
}
expressSwagger({
  swaggerDefinition: _swaggerConfig,
  basedir: __dirname,
  files: ['./app/**/*.js']
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server on')
});