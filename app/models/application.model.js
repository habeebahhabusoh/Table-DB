const applicationPersist = require('../persists/application.persist');
const generalPersist = require('../persists/general.persist');
const contractaddressPersist = require('../persists/contractaddress.persist');
const drivingPersist = require('../persists/driving.persist');
const historyPersist = require('../persists/history.persist');
const educationPersist = require('../persists/education.persist');
const skillPersist = require('../persists/skill.persist');

exports.findAll = async function () {
    const application = await applicationPersist.findAll();
    return application
};
exports.findAllGeneral = async function () {
    const general = await generalPersist.findAll();
    return general
};

exports.findAllcontract = async function () {
    const contractaddress = await contractaddressPersist.findAll();
    return contractaddress
};
exports.findAlldriving = async function () {
    const driving = await drivingPersist.findAll();
    return driving
};
exports.findAllhistory = async function () {
    const history = await historyPersist.findAll();
    return history
};
exports.findAlleducation = async function () {
    const education = await educationPersist.findAll();
    return education
};
exports.findAllskill = async function () {
    const skill = await skillPersist.findAll();
    return skill
};


// exports.findAllByIDApplication = function (applicationID) {
//         const application = applicationPersist.findById(applicationID);
//         const general = generalPersist.findById(application.generalID);
//         return [application,general];
// };

exports.findById = function (applicationID) {
    return applicationPersist.findById(applicationID);
};
exports.findByIdGen = function (generalID) {
    return generalPersist.findById(generalID);
};
exports.findByIdcontractaddress = function (conractID) {
    return contractaddressPersist.findById(conractID);
};
exports.findByIddriving = function (drivingID) {
    return drivingPersist.findById(drivingID);
};
exports.findByIdhistory = function (historyID) {
    return historyPersist.findById(historyID);
};
exports.findByIdeducation = function (educationID) {
    return educationPersist.findById(educationID);
};
exports.findByIdskill = function (skillID) {
    return skillPersist.findById(skillID);
};

exports.findIdCardNo = function (idCardNo){
    return generalPersist.findIdCardNo(idCardNo)
}

exports.addApplication = async function (content) {
    const json = {
        successfully: true,
        messages: [],
    };

    try {
        json.result = await applicationPersist.addApplication(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    } finally {
        return json;
    }
};

exports.updateApplicationById = async function (applicationID, content) {
    const json = {
        successfully: true,
        messages: [],
    };

    try {
        json.result = await applicationPersist.updateById(applicationID, content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    } finally {
        return json;
    }
};

exports.deleteApplicationById = async function (applicationID) {
    const json = {
        successfully: true,
        messages: [],
    };

    try {
        json.result = await applicationPersist.deleteById(applicationID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    } finally {
        return json;
    }
};