const router = require('express').Router();

const controller = require('../controllers/application.controller')

router.get('/all', controller.findAllApplicationContents);
// router.get('/:id', controller.findById);
router.get('/:id', controller.findAllByIdGeneralID);
router.post('/', controller.addApplication);
router.put('/:id', controller.updateApplicationById);
router.delete('/:id', controller.deleteApplicationById);

module.exports = router;