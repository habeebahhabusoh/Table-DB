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
            firstNameEN: "water cat",
            middleNameEN: "cat",
            lastNameEN: "not cat",
            birthDate:  new Date(),
            age: "18",
            maritalStatus: "not cat",
            sex: "M",
            height: "188",
            weight: "80",
            nationality: "thai",
            idCardNo: "1234567890123",
            expiryDate: new Date(),
            drivingLicenseType: "not cat",
            drivingType: "not cat",
            drivingLicenseNo: "not cat",
            drivingExpiryDate: new Date(),
            militaryService: "not cat",
            militaryData: "เกณแล้วคับ",
            crimeStatus: "y",
            crimeData: "not cat",
            disease: "y",
            diseaseData: "not cat"
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('General', null);
  }
};