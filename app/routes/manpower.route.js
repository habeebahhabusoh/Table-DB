const router = require('express').Router();

const controller = require('../controllers/manpower.controller')

router.get('/all', controller.findAllManPowerContents);
router.get('/:id', controller.findById);
router.post('/', controller.addManPower);
router.put('/:id', controller.updateManPowerById);
router.delete('/:id', controller.deleteManPowerById);

module.exports = router;
