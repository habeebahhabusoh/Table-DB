require('dotenv-flow').config()
const skillPersist = require('./persists/manpower.persist');
skillPersist.findAll().then(function(result) {
  console.log(result);
})