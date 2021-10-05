const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.add = function (content) {
  return sequelize.models.Application
    .create({
      applicationID: uuidv4(),
      generalID: uuidv4(),
      no: content.no,
      position1: content.position1,
      position2: content.position2,
      expectedSalary: content.expectedSalary,
      availableDate: new Date(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
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
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByApplicatioIDandGeneralID = function (applicationID, generalID) {
  return sequelize.models.Application
    .findOne({
      where: {
        applicationID: applicationID,
        generalID: generalID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
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
