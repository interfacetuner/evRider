const express = require('express'),
  evRide = require('./routes/evRides');
const morgan = require('morgan');
const port = 3000;
const indexRouter = require('./routes/index');
const evRidesRouter = require('./routes/evRides');
const reviewsRouter = require('./routes/reviews');

// Set up express app
const app = express();

// Connect to DB----step one
require('./config/database');

// const evRide = require('/routes/evRides');





// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false
}));

// Mount routes with app.use() middle ware routes
app.use('/', indexRouter);
app.use('/evRides', evRidesRouter);
app.use('/', reviewsRouter);
// app.get('/', reviewsRouter);


// Tell App to listen
app.listen(port, function () {
  console.log(`Express is listening on port:${port}`);
});
