exports.findAllDrivingContents = function (request, response){
    const content = require('../models/driving.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/driving.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;


exports.addDriving= function (request, response){
    const content = require('../models/driving.model');
    content.addDriving(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.updateDrivingById = function (request, response){
    const content = require('../models/driving.model');
    content.updateDrivingById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteDrivingById = function (request, response){
    const content = require('../models/driving.model');
    content.deleteDrivingById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;