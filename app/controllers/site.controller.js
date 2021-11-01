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

exports.general = async function (request, response){
    const content = require("../models/general.model");
    const general = await content.findAll();
    response.render("pages/general.ejs",{
        data: general
    });  
};

exports.application = async function (request, response){
    const content = require("../models/application.model");
    const application = await content.findAll();
    const general = await content.findAllGeneral();
    response.render("pages/application.ejs",{
        data:application,
        data2:general
    });  
};

exports.addmanpower = function (request, response){
    response.render("pages/create-manpower.ejs");
};

exports.addpagecontrol = function (request, response){
    response.render("pages/page-control.ejs");
};

exports.editpagecontrol = async function (request, response){
    const content = require("../models/application.model");
    const application = await content.findById(request.params.id)
    const contractaddress = await content.findById(request.params.id)
    response.render("pages/edit-pagecontrol.ejs",{
        data: application
    });  
};

exports.addapplication = function (request, response){
    response.render("pages/create-application.ejs");
};

exports.addgeneral = function (request, response){
    response.render("pages/create-general.ejs");
};

exports.editManPower = async function (request, response){
    const content = require("../models/manpower.model");
    const manPower = await content.findById(request.params.id)
    response.render("pages/edit-manpower.ejs",{
        data2:manPower
    });  
};

exports.editgeneral = async function (request, response){
    const content = require("../models/general.model");
    const general = await content.findById(request.params.id)
    response.render("pages/edit-general.ejs",{
        data:general
    });  
};