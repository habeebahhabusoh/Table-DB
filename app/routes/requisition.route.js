const router = require('express').Router();

const controller = require('../controllers/requisition.controller')

router.get('/all', controller.findAllRequisitionContents);
router.get('/:id', controller.findById);
router.post('/', controller.addRequisition);
router.put('/:id', controller.updateRequisitionById);
router.delete('/:id', controller.deleteRequisitionById);

module.exports = router;