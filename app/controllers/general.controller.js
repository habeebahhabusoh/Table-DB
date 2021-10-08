exports.findAllGeneralContents = function (request, response){
    const content = require('../models/general.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.addGeneral = function (request, response){
    const content = require('../models/general.model');
    content.addGeneral(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/general.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.updateGeneralById = function (request, response){
    const content = require('../models/general.model');
    content.updateGeneralById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteGeneralById = function (request, response){
    const content = require('../models/general.model');
    content.deleteGeneralById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

