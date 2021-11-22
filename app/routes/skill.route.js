const router = require('express').Router();

const controller = require('../controllers/skill.controller')

router.get('/all', controller.findAllSkillContents);
router.get('/:id', controller.findById);
router.post('/', controller.addSkill);
router.put('/:id/:id', controller.updateSkillById);
router.delete('/:id', controller.deleteSkillById);

module.exports = router;