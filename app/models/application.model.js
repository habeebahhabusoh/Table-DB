const applicationPersist = require('../persists/application.persist');
const generalPersist = require('../persists/general.persist');


exports.findAll = async function () {
    const application = await applicationPersist.findAll();
    return application
};
exports.findAllGeneral = async function () {
    const general = await generalPersist.findAll();
    return general
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