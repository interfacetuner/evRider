const express = require("express");
const router = express.Router();
const evRidesCtrl = require('../controllers/evRides');
// router maps http req to code/ controller function


router.get('/new', evRidesCtrl.new);
router.post('/', evRidesCtrl.create);
router.get('/', evRidesCtrl.index);
router.get('/oneWheel', evRidesCtrl.oneWheel);
router.get('/boosted', evRidesCtrl.boosted);
router.get('/segway', evRidesCtrl.segway);
router.get('/vanmoof', evRidesCtrl.vanmoof);
router.get('/ktm', evRidesCtrl.ktm);



module.exports = router;
