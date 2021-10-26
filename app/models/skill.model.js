const skillPersist = require('../persists/skill.persist');

exports.findAll = function(){
    return skillPersist.findAll();
};

exports.findById = function(generalID){
    return skillPersist.findById(generalID);
};

exports.addSkill = async function (content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await skillPersist.addSkill(content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.updateSkillById = async function (skillID,content){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await skillPersist.updateById(skillID,content);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};

exports.deleteSkillById = async function (skillID){
    const json = {
        successfully: true,
        messages:[],
    };

    try{
        json.result = await skillPersist.deleteById(skillID);
    } catch (error) {
        json.successfully = false;
        json.messages.push(error.toString());
    }finally{
        return json;
    }
};