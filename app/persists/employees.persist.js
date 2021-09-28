const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addEmployee = async function (content) {
  return sequelize.models.Employee
    .create({
      employeeId: content.employeeId,
      citizenId: content.citizenId,
      position: content.position,
      section: content.section,
      department: content.department,
      company: content.company,
      level: content.level,
      status: content.status,
      startDate: content.startDate,
      phone: content.phone,
      lineId: content.line,
      phone: content.phone,
      endDate: content.endDate,
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

exports.isExistsEmployeeId = function (employeeId) {
  return sequelize.models.Employee
    .findOne({
      where: {
        employeeId: employeeId,
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
  return sequelize.models.Employee
    .findAll()
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByEmployeeId = function (employeeId) {
  return sequelize.models.Employee
    .findOne({
      where: {
        employeeId: employeeId,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByCitizenId = function (citizenId) {
  return sequelize.models.Employee
    .findOne({
      where: {
        citizenId: citizenId,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateByEmployeeId = function (employeeId, content) {
  return sequelize.models.Employee
    .update(content, {
      where: {
        employeeId: employeeId,
        updatedAt: Date.now()
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
