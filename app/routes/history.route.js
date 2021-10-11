const router = require('express').Router();

const controller = require('../controllers/history.controller')

router.get('/all', controller.findAllHistoryContents);
router.get('/:id', controller.findById);
router.post('/', controller.addHistory);
router.put('/:id', controller.updateHistoryById);
router.delete('/:id', controller.deleteHistoryById);

module.exports = router;