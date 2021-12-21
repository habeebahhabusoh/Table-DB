const sequelize = require("../../config/sequelize");
// const { v4: uuidv4 } = require('uuid');

exports.findAll = function () {
  return sequelize.models.Thai_amphures
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
exports.findById = function (province_id) {
  return sequelize.models.Thai_amphures
    .findAll({
      where: {
        province_id: province_id,
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
  return sequelize.models.Thai_amphures
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
  return sequelize.models.Thai_amphures
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
