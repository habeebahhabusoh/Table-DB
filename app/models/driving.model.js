const drivingPersist = require('../persists/driving.persist');

exports.findAll = function(){
    return drivingPersist.findAll();
};

exports.findById = function(id){
    return drivingPersist.findById(id);
};

exports.addDriving = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await drivingPersist.addDriving(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.updateDrivingById = async function (drivingID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await drivingPersist.updateById(drivingID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteDrivingById = async function (drivingID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await drivingPersist.deleteById(drivingID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};