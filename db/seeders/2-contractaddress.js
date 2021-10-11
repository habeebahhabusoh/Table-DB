'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('ContractAddress',
        [
          {
            contractID: "66ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            generalID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            detailTH : "21 ม.5 ",
            subAreaTH: "บ้านควน",
            areaTH: "เมือง",
            provinceTH: "สตูล",
            postalCodeTH: "91140",
            detailEN: "22 แมวน้ำ",
            subAreaEN: "bankhuan",
            areaEN: "meung",
            provinceEN: "satun",
            postalCodeEN: "91140",
            presentAddress: "same",
            presentAddressSubArea: "same",
            presentAddressArea:  "same",
            presentAddressProvince: "same",
            presentAddressPostalCode: "same",
            contactEmail: "Mffw@gmail.com",
            contactPhone: "0888888888",
            createdAt:new Date(),
            updatedAt:new Date(),
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contractddress', null);
  }
};