exports.findAllEducationContents = function (request, response){
    const content = require('../models/education.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/education.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.addEducation = function (request, response){
    const content = require('../models/education.model');
    content.addEducation(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;
exports.updateEducationById = function (request, response){
    const content = require('../models/education.model');
    content.updateEducationById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;
exports.deleteEducationById = function (request, response){
    const content = require('../models/education.model');
    content.deleteEducationById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
};

