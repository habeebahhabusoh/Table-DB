const router = require('express').Router();

const controller = require('../controllers/skill.controller')

router.get('/all', controller.findAllSkillContents);
// router.get('/:id', controller.findById);
// router.post('/', controller.addManPower);
// router.put('/:id', controller.updateManPowerById);
// router.delete('/:id', controller.deleteManPowerById);

module.exports = router;