const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.add = function (content) {
  return sequelize.models.Token
    .create({
      id: uuidv4(),
      accessToken: content.accessToken,
      accessTokenExpiresOn: content.accessTokenExpiresOn,
      clientId: content.clientId,
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
  return sequelize.models.Token
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findByUserIdAndClientId = function (userId, clientId) {
  return sequelize.models.Token
    .findOne({
      where: {
        userId: userId,
        clientId: clientId,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findByAccessToken = function (accessToken) {
  return sequelize.models.Token
    .findOne({
      where: {
        accessToken: accessToken,
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
  return sequelize.models.Token
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

exports.updateById = function (id, content) {
  return sequelize.models.Token
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

exports.deleteByUserIdAndClientId = function (userId, clientId) {
  return sequelize.models.Token
    .destroy({
      where: {
        userId: userId,
        clientId: clientId,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};
