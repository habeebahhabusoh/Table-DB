const skillPersist = require('../persists/thai-tombons.persist');

exports.findAll = function(){
    return skillPersist.findAll();
};

exports.findById = function(id){
    return skillPersist.findById(id);
};