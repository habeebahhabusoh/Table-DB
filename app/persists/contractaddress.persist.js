const sequelize = require("../../config/sequelize");

exports.add = async function (content) {
  return sequelize.models.ContractAddress
    .create({
      contractID: content.contractID,
      id: content.id,
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
    .findAll()
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

exports.delete = function (postalCodeTH) {
  return sequelize.models.ContractAddress
    .destroy({
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
