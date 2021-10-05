const sequelize = require("../../config/sequelize");

exports.addUser = async function (content) {
  return sequelize.models.ManPower
    .create({
      manpowerID: content.manpowerID,
      company: content.company,
      department: content.department,
      section: content.section,
      positionRequired: content.positionRequired,
      level: content.level,
      requestDate: new Date(),
      commencementDate: new Date(),
      no: content.no,
      employeeType:  content.employeeType,
      hiringPeriod: content.hiringPeriod,
      sex: content.sex,
      age: content.age,
      education: content.education,
      major: content.major,
      experience: content.experience,
      inField: content.inField,
      englishTestScore:content.englishTestScore,
      skillAndKnowledge: content.skillAndKnowledge,
      requestedBy: content.requestedBy,
      positionRequisition: content.positionRequisition,
      dateRequisition: new Date(),
      commentByDepartmentHead: content.commentByDepartmentHead,
      signatureByDepartmentHead: content. signatureByDepartmentHead,
      dateByDepartmentHead:  new Date(),
      commentByHRBP: content.commentByHRBP,
      signatureHRBP: content.signatureHRBP,
      dateHRBP:   new Date(),
      signatureByDirectorHR: content.  signatureByDirectorHR,
      dateByDirectorHR:  new Date(),
      status: content.status,
      remark: content.remark,
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
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
    .findAll()
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

exports.findById = function (manpowerID) {
  return sequelize.models.ManPower
    .findOne({
      where: {
        manpowerID: manpowerID,
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

exports.updateById = function (manpowerID, content) {
  return sequelize.models.ManPower
    .update(content, {
      where: {
        manpowerID: manpowerID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteById = function (manpowerID) {
  return sequelize.models.ManPower
    .destroy({
      where: {
        manpowerID: manpowerID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
