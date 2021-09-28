const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.add = async function (content) {
  return sequelize.models.Client
    .create({
      id: uuidv4(),
      name: content.name,
      logoUri: content.logoUri,
      clientId: content.clientId,
      clientSecret: content.clientSecret,
      redirectUris: content.redirectUris,
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
  return sequelize.models.Client
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findById = function (id) {
  return sequelize.models.Client
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

exports.findByClientId = function (clientId) {
  return sequelize.models.Client
    .findOne({
      where: {
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

exports.updateByClientIdAndClientSecret = function (clientId, clientSecret, content) {
  return sequelize.models.Client
    .update(content, {
      where: {
        clientId: clientId,
        clientSecret: clientSecret,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.deleteByClientIdAndClientSecret = function (clientId, clientSecret) {
  return sequelize.models.Client
    .destroy({
      where: {
        clientId: clientId,
        clientSecret: clientSecret,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};
