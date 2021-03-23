const express = require("express");
const router = express.Router();
const evRidesCtrl = require('../controllers/evRides');
// router maps http req to code/ controller function


router.get('/new', evRidesCtrl.new);
router.get('/', evRidesCtrl.index);
router.get('/oneWheel', evRidesCtrl.oneWheel);
router.get('/boosted', evRidesCtrl.boosted);
router.get('/segway', evRidesCtrl.segway);
router.get('/vanmoof', evRidesCtrl.vanmoof);
router.get('/ktm', evRidesCtrl.ktm);
router.get('/gotrax', evRidesCtrl.gotrax);
router.get('/:id', evRidesCtrl.show);
router.post('/:id', evRidesCtrl.show);
router.post('/', evRidesCtrl.create);



module.exports = router;
