const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addEmployee = async function (content) {
  return sequelize.models.History
    .create({
      historyID: content.historyID,
      id: content.id,
      companyNameHistory: content.companyNameHistory,
      positionHistory: content.positionHistory,
      salaryHistory: content.salaryHistory,
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

exports.isExistsHistoryID = function (historyID) {
  return sequelize.models.History
    .findOne({
      where: {
        historyID: historyID,
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
  return sequelize.models.History
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByHistoryID = function (historyID) {
  return sequelize.models.History
    .findOne({
      where: {
        historyID: historyID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByPositionHistory = function (positionHistory) {
  return sequelize.models.History
    .findOne({
      where: {
        positionHistory: positionHistory,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByEmployeeId = function (historyID, content) {
  return sequelize.models.History
    .update(content, {
      where: {
        historyID: historyID,
        updatedAt: Date.now()
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
