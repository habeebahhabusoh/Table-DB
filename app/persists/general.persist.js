const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addGeneral = async function (content) {
  return sequelize.models.General
    .create({
      generalID: uuidv4(),
      perfixTH: content.perfixTH,
      firstNameTH: content.firstNameTH,
      middleNameTH: content.middleNameTH,
      lastNameTH: content.lastNameTH,
      perfixEN: content.perfixEN,
      firstNameEN: content.firstNameEN,
      middleNameEN: content.middleNameEN,
      lastNameEN: content.lastNameEN,
      birthDate: new Date(),
      age: content.age,
      maritalStatus: content.maritalStatus,
      sex: content.sex,
      height: content.height,
      weight: content.weight,
      nationality: content.nationality,
      idCardNo: content.idCardNo,
      expiryDate: new Date(),
      militaryService: content.militaryService,
      militaryData: content.militaryData,
      crimeStatus: content.crimeStatus,
      crimeData: content. crimeData,
      disease: content.  disease,
      diseaseData: content. diseaseData,
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

exports.isExistsFirstNameTH = function (firstNameTH) {
  return sequelize.models.General
    .findOne({
      where: {
        firstNameTH: firstNameTH,
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
  return sequelize.models.General
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

exports.findByFirstNameTH = function (firstNameTH) {
  return sequelize.models.General
    .findOne({
      where: {
        firstNameTH: firstNameTH,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findById = function (generalID) {
  return sequelize.models.General
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

exports.updateByUsername = function (firstNameTH, content) {
  return sequelize.models.General
    .update(content, {
      where: {
        firstNameTH: firstNameTH,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateById = function (generalID, content) {
  return sequelize.models.General
    .update(content, {
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

exports.deleteById = function (generalID) {
  return sequelize.models.General
    .destroy({
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
