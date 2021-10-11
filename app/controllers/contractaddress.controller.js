exports.findAllContractAddressContents = function (request, response){
    const content = require('../models/contractaddress.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/contractaddress.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;

exports.addContractAddress= function (request, response){
    const content = require('../models/contractaddress.model');
    content.addContractAddress(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.updateContractAddressById = function (request, response){
    const content = require('../models/contractaddress.model');
    content.updateContractAddressById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteContractAddressById = function (request, response){
    const content = require('../models/contractaddress.model');
    content.deleteContractAddressById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

