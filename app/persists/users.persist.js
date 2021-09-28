const sequelize = require("../../config/sequelize");

exports.addUser = async function (content) {
  return sequelize.models.User
    .create({
      id: content.id,
      username: content.username,
      password: content.hashPassword,
      displayName: content.displayName,
      verifyType: content.verifyType,
      verify: content.verify,
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
