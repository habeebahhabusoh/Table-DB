const sequelize = require("../../config/sequelize");

exports.add = async function (content) {
  return sequelize.models.authorizationCode
    .create({
      code: content.code,
      clientId: content.clientId,
      redirectUri: content.redirectUri,
      userId: content.userId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findAll = function () {
  return sequelize.models.authorizationCode
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findByCode = function (code) {
  return sequelize.models.authorizationCode
    .findOne({
      where: {
        code: code,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.update = function (code, content) {
  return sequelize.models.authorizationCode
    .update(content, {
      where: {
        code: code,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.delete = function (code) {
  return sequelize.models.authorizationCode
    .destroy({
      where: {
        code: code,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};
