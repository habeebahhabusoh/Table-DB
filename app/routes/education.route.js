const router = require('express').Router();

const controller = require('../controllers/education.controller')

router.get('/all', controller.findAllEducationContents);
// router.get('/:id', controller.findById);
// router.post('/', controller.addManPower);
// router.put('/:id', controller.updateManPowerById);
// router.delete('/:id', controller.deleteManPowerById);

module.exports = router;