const EvRide = require('../models/evRide');

function create(req, res) {
  EvRide.findById(req.params.id, function (err, evRide) {
    evRide.reviews.push(req.body);
    evRide.save(function (err) {
      res.redirect(`/evRide/${evRide._id}`);
    });
  });
}

module.exports = {
  create,
};
