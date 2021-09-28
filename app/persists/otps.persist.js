const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.add = async function (content) {
  return sequelize.models.OTP
    .create({
      id: uuidv4(),
      userId: content.userId,
      password: content.password,
      reference: content.reference,
      type: content.type,
      verify: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      expiredAt: content.expiredAt,
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findAll = function () {
  return sequelize.models.OTP
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findByUsername = function (username) {
  return sequelize.models.OTP
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

exports.findAllByUserId = function (userId) {
  return sequelize.models.OTP
    .findAll({
      where: {
        userId: userId,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findLatestByUserId = function (userId) {
  return sequelize.models.OTP
    .findOne({
      where: {
        userId: userId,
      },
      order: [ [ 'createdAt', 'DESC' ]]
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return error;
    });
};

exports.findById = function (id) {
  return sequelize.models.OTP
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
  return sequelize.models.OTP
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
  return sequelize.models.OTP
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
