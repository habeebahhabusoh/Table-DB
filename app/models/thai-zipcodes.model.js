const skillPersist = require('../persists/thai-zipcodes.persist');

exports.findAll = function(){
    return skillPersist.findAll();
};

exports.findById = function(id){
    return skillPersist.findById(id);
};