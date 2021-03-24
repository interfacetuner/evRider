const express = require("express");
const router = express.Router();
const evRidesCtrl = require('../controllers/evRides');


router.get('/', evRidesCtrl.index);
router.get('/show', evRidesCtrl.show);
router.post('/', evRidesCtrl.create);
router.get('/oneWheel', evRidesCtrl.oneWheel);
router.get('/boosted', evRidesCtrl.boosted);
router.get('/segway', evRidesCtrl.segway);
router.get('/vanmoof', evRidesCtrl.vanmoof);
router.get('/ktm', evRidesCtrl.ktm);
router.get('/gotrax', evRidesCtrl.gotrax);



module.exports = router;
