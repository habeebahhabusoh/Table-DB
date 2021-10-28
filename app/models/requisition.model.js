const requisitionPersist = require('../persists/requisition.persist');

exports.findAll = function(){
    return requisitionPersist.findAll();
};

exports.findById = function(requisitionID){
    return requisitionPersist.findById(requisitionID);
};

exports.addRequisition = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await requisitionPersist.addRequisition(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.updateRequisitonById = async function (requisitionID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await requisitionPersist.updateById(requisitionID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteRequisitionById = async function (requisitionID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await requisitionPersist.deleteById(requisitionID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
}; 