const router = require('express').Router();

const controller = require('../controllers/general.controller')

router.get('/all', controller.findAllGeneralContents);
router.get('/:id', controller.findById);
router.post('/', controller.addGeneral);
router.put('/:id', controller.updateGeneralById);
router.delete('/:id', controller.deleteGeneralById);

module.exports = router;