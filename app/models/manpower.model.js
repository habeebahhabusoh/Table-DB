const manpowerPersist = require('../persists/manpower.persist');

exports.findAll = function(){
    return manpowerPersist.findAll();
};

exports.addManPower = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await manpowerPersist.addManPower(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.findById = function(manPowerID){
    return manpowerPersist.findById(manPowerID);
};

exports.updateManPowerById = async function (id,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await manpowerPersist.updateById(id,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};


exports.deleteManPowerById = async function (manPowerID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await manpowerPersist.deleteById(manPowerID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};