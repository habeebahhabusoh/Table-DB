exports.findAllSkillContents = function (request, response){
    const content = require('../models/skill.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;