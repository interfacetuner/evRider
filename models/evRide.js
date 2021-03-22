const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



const evRideSchema = new Schema({
    review: {
      type: String,
    },
    //   flightNumber: {
    //     type: Number,
    //     min: 1,
    //     max: 9999
    //   },
    //   departTime: {
    //     type: Date,
    //     default: function () {
    //       let date = new Date();
    //       return date.setFullYear(date.getFullYear() + 1);
    //     },


  }

);


module.exports = mongoose.model('EvRide', evRideSchema);
