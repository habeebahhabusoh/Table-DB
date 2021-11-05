const router = require('express').Router();

const controller = require('../controllers/education.controller')

router.get('/all', controller.findAllEducationContents);
router.get('/:id', controller.findById);
router.post('/', controller.addEducation);
router.put('/:id/:id', controller.updateEducationById);
router.delete('/:id', controller.deleteEducationById);

module.exports = router;