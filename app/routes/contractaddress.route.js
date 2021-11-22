const router = require('express').Router();

const controller = require('../controllers/contractaddress.controller')

router.get('/all', controller.findAllContractAddressContents);
router.get('/:id', controller.findById);
router.post('/', controller.addContractAddress );
router.put('/:id/:id', controller.updateContractAddressById);
router.delete('/:id', controller.deleteContractAddressById);

module.exports = router;