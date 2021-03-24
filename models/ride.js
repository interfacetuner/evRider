const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
  make: {
    type: String,

  },
  model: {
    type: String,

  },
  price: {
    type: Number,
    min: 0,
  },
  range: {
    type: Number,
    min: 0,
  },
  speed: {
    type: Number,
    min: 0,
  },


}, {
  timestamps: true
});



module.exports = mongoose.model('EvRide', rideSchema);
