const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.add = async function (content) {
  return sequelize.models.Skill
    .create({
      skillID: uuidv4(),
      id: uuidv4(),
      typeOfSkill: content.typeOfSkill,
      level: content.level,
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findAll = function () {
  return sequelize.models.Skill
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByTypeOfskill = function (typeOfSkill) {
  return sequelize.models.Skill
    .findOne({
      where: {
        typeOfSkill: typeOfSkill,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findAllByLevel = function (level) {
  return sequelize.models.Skill
    .findAll({
      where: {
        level: level,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

// exports.findLatestByUserId = function (userId) {
//   return sequelize.models.OTP
//     .findOne({
//       where: {
//         userId: userId,
//       },
//       order: [ [ 'createdAt', 'DESC' ]]
//     })
//     .then(function (result) {
//       return result;
//     })
//     .catch(function (error) {
//       throw new Error(error.original);
//     });
// };

exports.findById = function (id) {
  return sequelize.models.Skill
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
  return sequelize.models.Skill
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
  return sequelize.models.Skill
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
