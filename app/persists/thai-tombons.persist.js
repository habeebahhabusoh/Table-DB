const sequelize = require("../../config/sequelize");
// const { v4: uuidv4 } = require('uuid');

exports.findAll = function () {
  return sequelize.models.Thai_tombons
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
exports.findById = function (amphur_id) {
  return sequelize.models.Thai_tombons
    .findAll({
      where: {
        amphur_id: amphur_id,
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
  return sequelize.models.Thai_tombons
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
  return sequelize.models.Thai_tombons
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
