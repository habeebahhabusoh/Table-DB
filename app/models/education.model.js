const educationPersist = require('../persists/education.persist');

exports.findAll = function(){
    return educationPersist.findAll();
};