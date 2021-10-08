const skillPersist = require('../persists/skill.persist');

exports.findAll = function(){
    return skillPersist.findAll();
};