exports.findAll = function (request, response){
    const content = require('../models/thai-zipcodes.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;

exports.findById = function (request, response){
    const content = require('../models/thai-zipcodes.model');
    content.findById(request.params.id).then((result)=>{
        response.json({result});
    });
} ;
