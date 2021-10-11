exports.findAllHistoryContents = function (request, response){
    const content = require('../models/history.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.addHistory = function (request, response){
    const content = require('../models/history.model');
    content.addHistory(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/history.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.updateHistoryById = function (request, response){
    const content = require('../models/history.model');
    content.updateHistoryById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteHistoryById = function (request, response){
    const content = require('../models/history.model');
    content.deleteHistoryById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;