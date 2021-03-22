const mongoose = require('mongoose');
// connected
mongoose.connect('mongodb+srv://SEI:Weezer@cluster0.7peh7.mongodb.net/evrides?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
// access data from/about the connection
const db = mongoose.connection;
// connect to mongoDB
db.on('connected', function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
