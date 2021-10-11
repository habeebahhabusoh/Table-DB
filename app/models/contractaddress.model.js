const contractAddressPersist = require('../persists/contractaddress.persist');

exports.findAll = function(){
    return contractAddressPersist.findAll();
};

exports.findById = function(contractID){
    return contractAddressPersist.findById(contractID);
};

exports.addContractAddress = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await contractAddressPersist.addContractAddress(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.updateContractAddressById = async function (contractID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await contractAddressPersist.updateById(contractID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteContractAddressById = async function (contractID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await contractAddressPersist.deleteById(contractID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};