const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addManPower = async function (content) {
  return sequelize.models.ManPower
    .create({
      manPowerID: uuidv4(),
      company: content.company,
      department: content.department,
      section: content.section,
      positionRequired: content.positionRequired,
      level: content.level,
      requestDate: new Date(),
      commencementDate: new Date(),
      numberOrder: content.numberOrder,
      employeeType: content.employeeType,
      hiringPeriod: content.hiringPeriod,
      sex: content.sex,
      age: content.age,
      education: content.education,
      major: content.major,
      experience: content.experience,
      inField: content.inField,
      englishTestScore: content.englishTestScore,
      skillAndKnowledge: content.skillAndKnowledge,
      requestedBy: content.requestedBy,
      positionRequisition: content.positionRequisition,
      dateRequisition: new Date(),
      commentByDepartmentHead: content.commentByDepartmentHead,
      signatureByDepartmentHead: content.signatureByDepartmentHead,
      dateByDepartmentHead: new Date(),
      commentByHRBP: content.commentByHRBP,
      signatureHRBP: content.signatureHRBP,
      dateHRBP: new Date(),
      signatureByDirectorHR: content.signatureByDirectorHR,
      dateByDirectorHR: new Date(),
      status: content.status,
      remark: content.remark,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      console.log(error);
      throw new Error(error.original);
    });
};

exports.isExistsCompany = function (company) {
  return sequelize.models.ManPower
    .findOne({
      where: {
        company: company,
      },
    })
    .then(function (result) {
      return result ? true : false;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findAll = function () {
  return sequelize.models.ManPower
    .findAll({
      order: [["createdAt", "DESC"]],
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByCompany = function (company) {
  return sequelize.models.ManPower
    .findOne({
      where: {
        company: company,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findById = function (manPowerID) {
  return sequelize.models.ManPower
    .findOne({
      where: {
        manPowerID: manPowerID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByCompany = function (company, content) {
  return sequelize.models.ManPower
    .update(content, {
      where: {
        company: company,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateById = function (manPowerID, content) {
  return sequelize.models.ManPower
    .update(content, {
      where: {
        manPowerID: manPowerID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteById = function (manPowerID) {
  return sequelize.models.ManPower
    .destroy({
      where: {
        manPowerID: manPowerID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
