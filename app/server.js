require('dotenv-flow').config()
const clientPersist = require('../app/persists/clients.persist');
clientPersist.findAll().then(function(result) {
  console.log(result);
})