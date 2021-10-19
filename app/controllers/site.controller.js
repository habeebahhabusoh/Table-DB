exports.index = function (request, response){
    response.render("pages/index.ejs",{
        // username: "habeebah!",
        // a: 1,
        // b: 1,
        // c: "C",
        status: "pending",
    });
};

exports.manpower = async function (request, response){
    const content = require("../models/manpower.model");
    const manpower = await content.findAll();
    response.render("pages/manpower.ejs",{
        data: manpower
    });  
};

exports.addmanpower = function (request, response){
    response.render("pages/create-manpower.ejs");
};

exports.editManPower = async function (request, response){
    const content = require("../models/manpower.model");
    const manPower = await content.findById(request.params.id)
    response.render("pages/edit-manpower.ejs",{
        data:manPower
    });  
};