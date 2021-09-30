const sequelize = require("../../config/sequelize");

exports.addUser = async function (content) {
  return sequelize.models.General
    .create({
      id: content.id,
      position1: content.position1,
      position2: content.position2,
      stratSalary: content.stratSalary,
      startDate:Date.now(),
      perfixTh: content.perfixTh,
      fNameTh: content.fNameTh,
      lNameTh: content.lNameTh,
      perfixEng: content.perfixEng,
      fNameEng: content.fNameEng,
      lNameEng: content.lNameEng,
      birthDate: Date.now(),
      age: content.age,
      maritalStatus: content.maritalStatus,
      sex: content.sex,
      height: content.height,
      weight: content.weight,
      nationality: content.nationality,
      idCardNo: content.idCardNo,
      expiryDate: new Date(),
      drivingLicenseType: content.drivingLicenseTyp,
      drivingType: content.drivingType,
      drivingLicenseNo: content.drivingLicenseNo,
      drivingExpiryDate: new Date(),
      crimeStatus: content.crimeStatus,
      crimeData: content. crimeData,
      disease: content.  disease,
      diseaseData: content. diseaseData,
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.isExistsUsername = function (username) {
  return sequelize.models.User
    .findOne({
      where: {
        username: username,
      },
    })
    .then(function (result) {
      return result ? true : false;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findAll = function () {
  return sequelize.models.User
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findByUsername = function (username) {
  return sequelize.models.User
    .findOne({
      where: {
        username: username,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findById = function (id) {
  return sequelize.models.User
    .findOne({
      where: {
        id: id,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.updateByUsername = function (username, content) {
  return sequelize.models.User
    .update(content, {
      where: {
        username: username,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.updateById = function (id, content) {
  return sequelize.models.User
    .update(content, {
      where: {
        id: id,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.deleteById = function (id) {
  return sequelize.models.User
    .destroy({
      where: {
        id: id,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};
