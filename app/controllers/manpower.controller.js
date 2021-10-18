exports.manpower = async function (request, response){
    const content = require("../models/manpower.model");
    const manpower = await content.findAll();
    response.render("pages/manpower.ejs",{
        data: manpower
    });
    
};
exports.addmanpower = async function (request, response){
    const content = require("../models/manpower.model");
    const manpower = await content.addManPower(request.body).then((result)=>{
    response.render("pages/create-manpower.ejs");
        data: manpower
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
};

exports.findAllManPowerContents = function (request, response){
    const content = require('../models/manpower.model');
    content.findAll().then((result)=>{
        response.json({result});
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