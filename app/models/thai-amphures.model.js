const skillPersist = require('../persists/thai-amphures.persist');

exports.findAll = function(){
    return skillPersist.findAll();
};

exports.findById = function(id){
    return skillPersist.findById(id);
};