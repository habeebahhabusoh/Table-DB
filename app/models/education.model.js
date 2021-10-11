const educationPersist = require('../persists/education.persist');

exports.findAll = function(){
    return educationPersist.findAll();
};

exports.findById = function(educationID){
    return educationPersist.findById(educationID);
};

exports.addEducation = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await educationPersist.addEducation(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.updateEducationById = async function (educationID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await educationPersist.updateById(educationID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteEducationById = async function (educationID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await educationPersist.deleteById(educationID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

