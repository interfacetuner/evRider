const Review = require('../models/review');

function newEvRide(req, res) {
  res.render('evRides/show');
}


function create(req, res) {
  //sanitize data
  for (key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  Review.create(req.body, function (err, evRide) {
    if (err) {
      console.log(err);
      return res.render('/evRides/show');
    }
    res.redirect('/evRides/show');
  });
}


function index(req, res) {
  Review.findOne({}, function (err, evRides) {
    console.log(evRides);
    res.render('evRides/index', {
      evRides
    })
  });
}

function show(req, res) {
  console.log('We are here');
  Review.find(req.params.id, function (err, evRide) {
    res.render('evRides/show', {
      title: 'EvRide Detail',
      evRide
    });
  });
}

function review(req, res) {
  Review.find(req.params.id, function (err, reviews) {
    res.render('reviews/show', {
      title: 'Reviews-Page',
      review
    });
  });
}

function oneWheel(req, res) {
  res.render('evRides/oneWheel');
}

function boosted(req, res) {
  console.log('here');
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
  review,
};
