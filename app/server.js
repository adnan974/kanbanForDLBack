console.log("server.js");

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const expressSwagger = require('express-swagger-generator')(app);
const { mongodbConfig } = require('../config.json');


// // Todo: a modifier
// const {scheduler} = require('./app/utils/jobs')

// // Scheduled task
// scheduler();

// import routes
const routes = require('./routes');

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
app.use(cors());



//routes middleware
app.use('/api', routes);


//Swagger
const _swaggerConfig = {
  "info": {
    "description": "This is a sample server",
    "title": "Swagger",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
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
  files: ['./**/*.js']
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server on')
});