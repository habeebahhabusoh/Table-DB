const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addPerson = async function (content) {
  return sequelize.models.Personal
    .create({
      citizenId: content.citizenId,
      titleTH: content.titleTH,
      titleEN: content.titleEN,
      nameTH: content.nameTH,
      nameEN: content.nameEN,
      lastnameTH: content.lastnameTH,
      lastnameEN: content.lastnameEN,
      birthday: content.birthday,
      gender: content.gender,
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

exports.isExistsPerson = function (citizenId) {
  return sequelize.models.Personal
    .findOne({
      where: {
        citizenId: citizenId,
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
  return sequelize.models.Personal
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByCitizenId = function (citizenId) {
  return sequelize.models.Personal
    .findOne({
      where: {
        citizenId: citizenId,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByCitizenId = function (citizenId, content) {
  return sequelize.models.Personal
    .update(content, {
      where: {
        citizenId: citizenId,
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