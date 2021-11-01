const applicationPersist = require('../persists/application.persist');
const generalPersist = require('../persists/general.persist');
const skillPersist = require('../persists/skill.persist');

exports.findAll = async function () {
    const application = await applicationPersist.findAll();
    return application
};
exports.findAllGeneral = async function () {
    const general = await generalPersist.findAll();
    return general
};

exports.findAllByApplication = async function (applicationID) {
        const application = await applicationPersist.findById(applicationID);
        const general = await generalPersist.findById(application.generalID);
        // const skill = await skillPersist.findById(application.generalID);

        return [application,general];
        
};

exports.findById = function (applicationID) {
    return applicationPersist.findById(applicationID);
};

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