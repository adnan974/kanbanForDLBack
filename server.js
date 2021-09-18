const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const expressSwagger = require('express-swagger-generator')(app);
const {swaggerConfig,mongodbConfig} = require('./config.json');
const { giveTicketsIsInProgressSince3Days } = require('./app/repositories/ticketRepository');


// // Todo: a modifier
// const {scheduler} = require('./app/utils/jobs')

// // Scheduled task
// scheduler();

// import routes
const routes = require('./app/routes/');

// database
mongoose
  .connect(mongodbConfig.databaseUrl, mongodbConfig.options)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Mongoose connection error to database: ', err.message));

// middlewares
app.use(bodyParser.json());
app.use(cors());


//routes middleware
app.use('/api', routes);


//Swagger
expressSwagger({
  swaggerDefinition:swaggerConfig.swaggerDefinition,
  basedir: __dirname, 
  files: ['./app/**/*.js']
})

app.listen(3000, () => {
  console.log('server on')
});