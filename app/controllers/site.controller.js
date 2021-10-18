exports.index = async function (request, response){
    const model = require("../models/manpower.model");
    const manpower = await model.findAll();
    console.log(manpower)
    response.render("pages/index.ejs",{
       
        // B: manpower.manPowerID,
        data: manpower
       
    });
};