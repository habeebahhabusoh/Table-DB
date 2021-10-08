exports.findAllEducationContents = function (request, response){
    const content = require('../models/education.model');
    content.findAll().then((result)=>{
        response.json({result});
    });
} ;