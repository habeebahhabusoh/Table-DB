const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addRequisition = function (content) {
  return sequelize.models.Requisition
    .create({
      requisitionID: uuidv4(),
      manPowerID: content.manPowerID,
      applicationID: content.applicationID,
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
  return sequelize.models.Requisition
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findById = function (requisitionID) {
  return sequelize.models.Requisition
    .findOne({
      where: {
        requisitionID: requisitionID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateById = function (requisitionID, content) {
  return sequelize.models.Requisition
    .update(content, {
      where: {
        requisitionID: requisitionID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteById = function (requisitionID) {
  return sequelize.models.Requisition
    .destroy({
      where: {
        requisitionID: requisitionID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};


exports.findByRequisitionIDandApplicatioIDandmanPowerID = function (requisitionID, applicationID, manPowerID) {
  return sequelize.models.Requisition
    .findOne({
      where: {
        requisitionID: requisitionID,
        applicationID: applicationID,
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


exports.findByRequisitionID = function (requisitionID) {
  return sequelize.models.Requisition
    .findOne({
      where: {
        requisitionID: requisitionID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByRequisitionID = function (requisitionID, content) {
  return sequelize.models.Requisition
    .update(content, {
      where: {
        requisitionID: requisitionID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteByRequisitionIDandApplicationIDandmanPowerID = function (requisitionID, applicationID, manPowerID) {
  return sequelize.models.Requisition
    .destroy({
      where: {
        requisitionID: requisitionID,
        applicationID: applicationID,
        manPowerID: manPowerID
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
