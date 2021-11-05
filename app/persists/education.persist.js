const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addEducation = async function (content) {
  return sequelize.models.Education
    .create({
      educationID: uuidv4(),
      generalID: content.generalID,
      educationLevel: content.educationLevel,
      name: content.name,
      major: content.major,
      startDate: new Date(),
      endDate: new Date(),
      createdAt:new Date(),
      updatedAt:new Date(),
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.isExistsPerson = function (educationID) {
  return educationID.models.Education
    .findOne({
      where: {
        educationID: educationID,
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
  return sequelize.models.Education
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
exports.findById = function (educationID) {
  return sequelize.models.Education
    .findOne({
      where: {
        educationID: educationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

// exports.findByCitizenId = function (educationID) {
//   return educationID.models.Education
//     .findOne({
//       where: {
//         educationID: educationID,
//       },
//     })
//     .then(function (result) {
//       return result;
//     })
//     .catch(function (error) {
//       throw new Error(error.original);
//     });
// };

exports.updateById = function (educationID, content) {
  return sequelize.models.Education
    .update(content, {
      where: {
        educationID: educationID,
      },
    })
    .then(function (result) {
      console.log(result);
      return result;
    })
    .catch(function (error) {
      console.log(error);
      throw new Error(error.original);
    });
};
exports.deleteById = function (educationID) {
  return sequelize.models.Education
    .destroy({
      where: {
        educationID: educationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};