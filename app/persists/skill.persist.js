const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addSkill = async function (content) {
  return sequelize.models.Skill
    .create({

      skillID:uuidv4(),
      generalID: content.generalID,
      // skillID: uuidv4(),
      // id: uuidv4(),
      typeOfSkill: content.typeOfSkill,
      level: content.level,
      createdAt:new Date(),
      updatedAt:new Date(),
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findAll = function () {
  return sequelize.models.Skill
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByTypeOfskill = function (typeOfSkill) {
  return sequelize.models.Skill
    .findOne({
      where: {
        typeOfSkill: typeOfSkill,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findAllByLevel = function (level) {
  return sequelize.models.Skill
    .findAll({
      where: {
        level: level,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
/////// เพิ่ม function
exports.findById = function (generalID) {
  return sequelize.models.Skill
    .findOne({
      where: {
        generalID: generalID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateById = function (skillID, content) {
  return sequelize.models.Skill
    .update(content, {
      where: {
        skillID: skillID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteById = function (skillID) {
  return sequelize.models.Skill
    .destroy({
      where: {
        skillID: skillID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
