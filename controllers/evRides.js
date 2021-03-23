const EvRide = require('../models/evRide');

function newEvRide(req, res) {
  res.render('evRides/show');
}


function create(req, res) {
  //sanitize data
  for (key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  EvRide.create(req.body, function (err, evRide) {
    if (err) return res.render('/evRides/show');
    res.redirect('/evRides');
  });
}


function index(req, res) {
  EvRide.findOne({}, function (err, evRides) {
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

function ktm(req, res) {
  res.render('evRides/ktm');
}

function gotrax(req, res) {
  res.render('evRides/gotrax');
}

// function show(req, res) {
//   res.render('evRides/show');
// }

function show(req, res) {
  EvRide.find(req.params.id, function (err, evRide) {
    res.render('evRides/show', {
      title: 'EvRide Detail',
      evRide
    });
  });
}

module.exports = {
  new: newEvRide,
  create,
  index,
  oneWheel,
  boosted,
  segway,
  vanmoof,
  ktm,
  gotrax,
  show,
};
