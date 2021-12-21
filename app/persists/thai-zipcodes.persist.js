const sequelize = require("../../config/sequelize");
// const { v4: uuidv4 } = require('uuid');

exports.findAll = function () {
  return sequelize.models.Thai_zipcodes
  .findAll({
    order: [["createdAt", "DESC"]],
  })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

/////// เพิ่ม function
exports.findById = function (id) {
  return sequelize.models.Thai_zipcodes
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

exports.updateById = function (id, content) {
  return sequelize.models.Thai_zipcodes
    .update(content, {
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

exports.deleteById = function (id) {
  return sequelize.models.Thai_zipcodes
    .destroy({
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
