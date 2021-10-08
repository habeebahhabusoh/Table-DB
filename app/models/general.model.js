const generalPersist = require('../persists/general.persist');

exports.findAll = function(){
    return generalPersist.findAll();
};

exports.addGeneral = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await generalPersist.addGeneral(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};


exports.findById = function(generalID){
    return generalPersist.findById(generalID);
};

exports.updateGeneralById = async function (generalID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await generalPersist.updateById(generalID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteGeneralById = async function (generalID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await generalPersist.deleteById(generalID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};