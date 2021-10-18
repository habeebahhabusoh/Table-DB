exports.findAllManPowerContents = function (request, response){
    const content = require('../models/manpower.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
    response.render("pages/index.ejs",{
       
        company: content.company
       
    });
} ;

exports.addManPower = function (request, response){
    const content = require('../models/manpower.model');
    content.addManPower(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/manpower.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.updateManPowerById = function (request, response){
    const content = require('../models/manpower.model');
    content.updateManPowerById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteManPowerById = function (request, response){
    const content = require('../models/manpower.model');
    content.deleteManPowerById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;