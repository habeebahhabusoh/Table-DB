const historyPersist = require('../persists/history.persist');

exports.findAll = function(){
    return historyPersist.findAll();
};

exports.addHistory = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await historyPersist.addHistory(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.findById = function(historyID){
    return historyPersist.findById(historyID);
};

exports.updateHistoryById = async function (historyID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await historyPersist.updateById(historyID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};


exports.deleteHistoryById = async function (historyID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await historyPersist.deleteById(historyID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};