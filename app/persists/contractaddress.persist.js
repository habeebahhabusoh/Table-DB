const sequelize = require("../../config/sequelize");
const { v4: uuidv4 } = require('uuid');

exports.addContractAddress = async function (content) {
  return sequelize.models.ContractAddress
    .create({
      contractID:uuidv4(),
      generalID: content.generalID,
      detailTH: content.detailTH,
      subAreaTH: content.subAreaTH,
      areaTH: content.areaTH,
      provinceTH: content.provinceTH,
      postalCodeTH: content.postalCodeTH,
      detailEN: content.detailEN,
      subAreaEN: content.subAreaEN,
      areaEN: content.areaEN,
      provinceEN: content.provinceEN,
      postalCodeEN: content.postalCodeEN,
      presentAddress: content.presentAddress,
      presentAddressSubArea: content.presentAddressSubArea,
      presentAddressArea: content.presentAddressArea,
      presentAddressProvince: content.presentAddressProvince,
      presentAddressPostalCode: content.presentAddressPostalCode,
      contactEmail: content.contactEmail,
      contactPhone: content.contactPhone,
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

exports.findAll = function () {
  return sequelize.models.ContractAddress
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

exports.findById = function (contractID) {
  return sequelize.models.ContractAddress
    .findOne({
      where: {
        contractID: contractID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.findByCode = function (postalCodeTH) {
  return sequelize.models.ContractAddress
    .findOne({
      where: {
        postalCodeTH: postalCodeTH,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.update = function (postalCodeTH, content) {
  return sequelize.models.ContractAddress
    .update(content, {
      where: {
        postalCodeTH: postalCodeTH,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.updateById = function (contractID, content) {
  return sequelize.models.ContractAddress
    .update(content, {
      where: {
        contractID: contractID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};

exports.deleteById = function (contractID) {
  return sequelize.models.ContractAddress
    .destroy({
      where: {
        contractID: contractID,
      },
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      throw new Error(error.original);
    });
};
