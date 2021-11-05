const router = require('express').Router();

const controller = require('../controllers/driving.controller')

router.get('/all', controller.findAllDrivingContents);
router.get('/:id', controller.findById);
router.post('/', controller.addDriving );
router.put('/:id/:id', controller.updateDrivingById);
router.delete('/:id', controller.deleteDrivingById);

module.exports = router;