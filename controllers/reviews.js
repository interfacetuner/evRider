const Review = require('../models/review');

function create(req, res) {
  Review.findById(req.params.id, function (err, evRide) {
    evRide.reviews.push(req.body);
    evRide.save(function (err) {
      res.redirect(`/evRides/${evRide._id}`);
    });
  });
}

module.exports = {
  create,
};
