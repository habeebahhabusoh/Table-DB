const router = require('express').Router();

const controller = require('../controllers/thai-tombons.controller')

router.get('/all', controller.findAll);
// router.get('/:id', controller.findAllByApplication);
router.get('/:id', controller.findById);
// router.post('/', controller.addApplication);
// router.put('/:id/:id', controller.updateApplicationById);
// router.delete('/:id', controller.deleteApplicationById);

module.exports = router;