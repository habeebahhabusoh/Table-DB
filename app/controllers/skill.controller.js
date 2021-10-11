exports.findAllSkillContents = function (request, response){
    const content = require('../models/skill.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/skill.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;


exports.addSkill= function (request, response){
    const content = require('../models/skill.model');
    content.addSkill(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.updateSkillById = function (request, response){
    const content = require('../models/skill.model');
    content.updateSkillById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteSkillById = function (request, response){
    const content = require('../models/skill.model');
    content.deleteSkillById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;