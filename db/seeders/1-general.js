'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('General',
        [
          {
            generalID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            perfixTH: "นาย",
            firstNameTH: "แมวน้ำ",
            middleNameTH: "แมว",
            lastNameTH: "ไม่ใช่แมว",
            perfixEN: "Mr",
            firstNameEN: "sara",
            middleNameEN: "nayoo",
            lastNameEN: "nyuha",
            birthDate:  new Date(),
            age: "18",
            maritalStatus: "not cat",
            sex: "M",
            height: "188",
            weight: "80",
            nationality: "thai",
            idCardNo: "1515154851312",
            expiryDate: new Date(),
            militaryService: "yes",
            militaryData: "เกณแล้วคับ",
            crimeStatus: "no",
            crimeData: "nothing",
            disease: "no",
            diseaseData: "nothing",
            createdAt:new Date(),
            updatedAt:new Date(),
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('General', null);
  }
};