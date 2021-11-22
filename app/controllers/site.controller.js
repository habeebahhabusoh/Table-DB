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
        data:manpower
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
    const contractaddress = await content.findAllcontract();
    const driving = await content.findAlldriving();
    const history = await content.findAllhistory();
    const education = await content.findAlleducation();
    const skill = await content.findAllskill();
    response.render("pages/application.ejs",{
        data:application,
        data2:general,
        data3:contractaddress,
        data4:driving,
        data5:history,
        data6:education,
        data7:skill

    }); 
    console.log(application) 
};
exports.addmanpower = function (request, response){
    response.render("pages/create-manpower.ejs");
};
exports.addpagecontrol = function (request, response){
    response.render("pages/page-control.ejs");
};

exports.userRegister = function (request, response){
    response.render("pages/user-register.ejs");
};

exports.editpagecontrol = async function (request, response){
    const content = require("../models/application.model");
    console.log(request.params.id)
    const general = await content.findByIdGen(request.params.generalID)
    const application = await content.findById(request.params.applicationID)
    const contractaddress = await content.findByIdcontractaddress(request.params.contractID)
    const driving = await content.findByIddriving(request.params.drivingID)
    const history = await content.findByIdhistory(request.params.historyID)
    const education = await content.findByIdeducation(request.params.educationID)
    const skill = await content.findByIdskill(request.params.skillID)
    response.render("pages/edit-pagecontrol.ejs",{
        data:general,
        dataapplication: application,
        datacontractaddress: contractaddress,
        datadriving: driving,
        datahistory:history,
        dataeducation:education,
        dataskill:skill
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
        data:manPower
    });  
};

exports.editgeneral = async function (request, response){
    const content = require("../models/general.model");
    const general = await content.findById(request.params.id)
    response.render("pages/edit-general.ejs",{
        data:general
    });  
};

exports.findIdCardNo = async function (request, response){
    const content = require("../models/general.model");
    const idCardNo = await content.findByIdCard(request.params.idCardNo)
    response.render("pages/user-register.ejs",{
        data:idCardNo
    });
};

