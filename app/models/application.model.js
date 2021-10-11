const applicationPersist = require('../persists/application.persist');

exports.findAll = function(){
    return applicationPersist.findAll();
};

exports.findById = function(applicationID){
    return applicationPersist.findById(applicationID);
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