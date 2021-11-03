const router = require('express').Router();

const siteController = require('../controllers/site.controller');
router.get("/bee", siteController.index);

router.get("/manpower", siteController.manpower);
router.get("/add", siteController.addmanpower);
router.get("/edit/:id", siteController.editManPower);

router.get("/application", siteController.application);
router.get("/addApplication", siteController.addapplication);

router.get("/pagecontrol", siteController.addpagecontrol);
router.get("/editpagecontrol/:generalID/:applicationID", siteController.editpagecontrol);

router.get("/general", siteController.general);
router.get("/addGeneral", siteController.addgeneral);
router.get("/editgeneral/:id", siteController.editgeneral);


module.exports = router;
