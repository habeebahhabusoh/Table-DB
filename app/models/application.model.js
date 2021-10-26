const applicationPersist = require('../persists/application.persist');
const generalPersist = require('../persists/general.persist');
const skillPersist = require('../persists/skill.persist');


exports.findAll = function(){
    return applicationPersist.findAll();
    
}; 

exports.findById = async function(applicationID){
    return applicationPersist.findById(applicationID);
};


exports.findAllApplicationIDByIdGeneralID = async function(id){
    const applicationlList = await applicationPersist.findById(id);
    const generalList = await generalPersist.findById(applicationlList.generalID);
    const skillList = await skillPersist.findById(applicationlList.generalID);

    return [{applicationlList,generalList,skillList}];
};

// exports.findAllApplicationIDByIdGeneralID = async function(applicationID){
//     const skillModel = require('../models/skill.model');
//     const generalList = await applicationPersist.findById(applicationID);
//     await Promise.all(
//         generalList.map(async(general)=>{
//             const generalListDetail = await skillModel.findById(general.generalID);
//             general.typeOfSkill = generalListDetail.typeOfSkill;
//             general.level = generalListDetail.level;
//         })
//     );
//     return generalList;
// };

exports.findByApplicatioIDandGeneralID = function(applicationID,generalID){
    return applicationPersist.findByApplicatioIDandGeneralID(applicationID,generalID);
};

exports.addApplication = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await applicationPersist.addApplication(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.updateApplicationById = async function (drivingID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await applicationPersist.updateById(drivingID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteApplicationById = async function (drivingID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await applicationPersist.deleteById(drivingID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};