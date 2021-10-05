const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addPerson = async function (content) {
  return sequelize.models.Education
    .create({
      educationID: content.educationID,
      id: content.titleTH,
      educationLevel: content.educationLevel,
      name: content.name,
      major: content.major,
      startDate: content.startDate,
      endDate: content.endDate,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.isExistsPerson = function (educationID) {
  return educationID.models.Education
    .findOne({
      where: {
        educationID: educationID,
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
  return sequelize.models.Education
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByCitizenId = function (educationID) {
  return educationID.models.Education
    .findOne({
      where: {
        educationID: educationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByCitizenId = function (educationID, content) {
  return educationID.models.Education
    .update(content, {
      where: {
        educationID: educationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      console.log(error);
      throw new Error(error.original);
    });
};