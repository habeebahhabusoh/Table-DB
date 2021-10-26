exports.findAllApplicationContents = function (request, response){
    const content = require('../models/application.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/application.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.findAllByIdGeneralID = function (request, response){
    const content = require('../models/application.model');
    content.findAllApplicationIDByIdGeneralID(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.findByApplicatioIDandGeneralID = function (request, response){
    const content = require('../models/application.model');
    content.findByApplicatioIDandGeneralID(request.params.id).then((result)=>{
        response.json({result});
    });
} ;


exports.addApplication= function (request, response){
    const content = require('../models/application.model');
    content.addApplication(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.updateApplicationById = function (request, response){
    const content = require('../models/application.model');
    content.updateApplicationById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteApplicationById = function (request, response){
    const content = require('../models/application.model');
    content.deleteApplicationById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;