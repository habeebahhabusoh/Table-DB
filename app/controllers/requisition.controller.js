exports.findAllRequisitionContents = function (request, response){
    const content = require('../models/requisition.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/requisition.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;


exports.addRequisition= function (request, response){
    const content = require('../models/requisition.model');
    content.addRequisition(request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.updateRequisitionById = function (request, response){
    const content = require('../models/requisition.model');
    content.updateRequisitionById(request.params.id, request.body).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;

exports.deleteRequisitionById = function (request, response){
    const content = require('../models/requisition.model');
    content.deleteRequisitionById(request.params.id).then((result)=>{
        result.successfully
        ? response.status(200).json(result)
        : response.status(500).json(result)
    });
} ;