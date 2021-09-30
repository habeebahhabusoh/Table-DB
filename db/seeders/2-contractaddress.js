'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('ContractAddress',
        [
          {
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            addressTH : "21 ม.5 ",
            addressSubAreaTH: "บ้านควน",
            addressAreaTH: "เมือง",
            addressProvinceTH: "สตูล",
            addressPostalCodeTH: "91140",
            addressEN: "22 แมวน้ำ",
            addressSubAreaEN: "bankhuan",
            addressAreaEN: "meung",
            addressProvinceEN: "satun",
            addressPostalCodeEN: "91140",
            presentAddress: "same",
            presentAddressSubArea: "same",
            presentAddressArea:  "same",
            presentAddressProvince: "same",
            presentAddressPostalCode: "same",
            contactEmail: "Mffw@gmail.com",
            contactPhone: "0888888888",
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contractddress', null);
  }
};