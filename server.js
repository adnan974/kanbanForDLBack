const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');

// database
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Mongoose connection error to database: ', err.message));

// middlewares
app.use(bodyParser.json());
app.use(cors());


//routes middleware
app.use('/api', authRoutes);
app.use('/api', ticketRoutes);


app.listen(3000, () => {
  console.log('server on')
});