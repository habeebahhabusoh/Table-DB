const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addApplication = function (content) {
  return sequelize.models.Application
    .create({
      applicationID: uuidv4(),
      generalID: content.generalID,
      numberOrder: content.numberOrder,
      position1: content.position1,
      position2: content.position2,
      expectedSalary: content.expectedSalary,
      availableDate: new Date(),
      status: content.status,
      createdAt:new Date(),
      updatedAt:new Date(),
      deletedAt: null,
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findAll = function () {
  return sequelize.models.Application
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

exports.findById = function (applicationID) {
  return sequelize.models.Application
    .findOne({
      where: {
        applicationID: applicationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateById = function (applicationID, content) {
  return sequelize.models.Application
    .update(content, {
      where: {
        applicationID: applicationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteById = function (applicationID) {
  return sequelize.models.Application
    .destroy({
      where: {
        applicationID: applicationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};


exports.findAllByApplication = function (applicationID) {
  return sequelize.models.Application
    .findOne({
      where: {
        applicationID: applicationID,
        
      },
    })
    .then(function (result) {
      return result;
    })
    .catch((error) => {
      assert.isNotOk(error,'Promise error');
      done();
    });
};

exports.findByPosition1 = function (position1) {
  return sequelize.models.Application
    .findOne({
      where: {
        position1: position1,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByPosition2 = function (position2) {
    return sequelize.models.Application
      .findOne({
        where: {
          position2: position2,
        },
      })
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        throw new Error(error.original);
      });
  };

  exports.findByExpectedSalary = function (expectedSalary) {
    return sequelize.models.Application
      .findOne({
        where: {
            expectedSalary: expectedSalary,
        },
      })
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        throw new Error(error.original);
      });
  };

  exports.findByAvailableDate = function (availableDate) {
    return sequelize.models.Application
      .findOne({
        where: {
            availableDate: availableDate,
        },
      })
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        throw new Error(error.original);
      });
  };

exports.findByApplicationID = function (applicationID) {
  return sequelize.models.Application
    .findOne({
      where: {
        applicationID: applicationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByApplicationID = function (applicationID, content) {
  return sequelize.models.Application
    .update(content, {
      where: {
        applicationID: applicationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteByApplicationIDandGeneralID = function (applicationID, generalID) {
  return sequelize.models.Application
    .destroy({
      where: {
        generalID: generalID,
        applicationID: applicationID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
