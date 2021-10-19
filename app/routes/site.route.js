const router = require('express').Router();

const siteController = require('../controllers/site.controller');
router.get("/bee", siteController.index);

router.get("/manpower", siteController.manpower);
router.get("/add", siteController.addmanpower);
router.get("/edit/:id", siteController.editManPower);


module.exports = router;
