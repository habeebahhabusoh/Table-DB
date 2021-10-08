const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.add = function (content) {
  return sequelize.models.Driving
    .create({
      drivingID: uuidv4(),
      id: uuidv4(),
      drivingLicenseType: content.drivingLicenseType,
      drivingType: content.drivingType,
      drivingLicenseNo: content.drivingLicenseNo,
      drivingExpiryDate: content.drivingExpiryDate,
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
  return sequelize.models.Driving
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByDrivingiIDandID = function (drivingID, id) {
  return sequelize.models.Driving
    .findOne({
      where: {
        drivingID: drivingID,
        id: id,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByDrivingType = function (drivingType) {
  return sequelize.models.Driving
    .findOne({
      where: {
        drivingType: drivingType,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findById = function (id) {
  return sequelize.models.Driving
    .findOne({
      where: {
        id: id,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByDriving = function (drivingID, content) {
  return sequelize.models.Driving
    .update(content, {
      where: {
        drivingID: drivingID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteByDrivingiIDandID = function (drivingID, id) {
  return sequelize.models.Driving
    .destroy({
      where: {
        drivingID: drivingID,
        id: id,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
