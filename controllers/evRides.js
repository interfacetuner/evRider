const EvRide = require('../models/evRide');

function newEvRide(req, res) {
  res.render('evRides/new');
}


function create(req, res) {
  //sanitize data
  for (key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  EvRide.create(req.body, function (err, flight) {
    if (err) return res.render('evRides/new');
    res.redirect('/evRides');
  });
}


function index(req, res) {
  EvRide.find({}, function (err, evRides) {
    console.log(evRides);
    res.render('evRides/index', {
      evRides
    })
  });
}

function oneWheel(req, res) {
  res.render('evRides/oneWheel');
}

function boosted(req, res) {
  res.render('evRides/boosted');
}

function segway(req, res) {
  res.render('evRides/segway');
}

function vanmoof(req, res) {
  res.render('evRides/vanmoof');
}

module.exports = {
  new: newEvRide,
  create,
  index,
  oneWheel,
  boosted,
  segway,
  vanmoof,
};
