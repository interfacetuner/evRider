const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true
});

const evRideSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: function () {
      return new Date().getFullYear();
    }
  },

  reviews: [reviewSchema],
}, {
  timestamps: true
});



module.exports = mongoose.model('EvRide', evRideSchema);
