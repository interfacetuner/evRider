const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,

  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 10
  },

}, {
  timestamps: true
});



module.exports = mongoose.model('Review', reviewSchema);
