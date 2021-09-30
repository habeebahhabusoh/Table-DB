
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('ManPower',
        [
          {
            manID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c89",
            manCompany : "test",
            manDepartment: "cat",
            manSection: "12000",
            manPosition: "it sup",
            manLevel: "นาย",
            manRequestDate: new Date(),
            manStartDate: new Date(),
            manNo: "5",
            manStaffType: "Mr",
            manHiringPeriod: 2,
            manSex: "cat",
            manAge: 25,
            manEducation:"cat",
            manMajor: "mit",
            manExperience: "yep",
            manInfield: "com",
            manTestScoreEN: "188",
            manSkill: "80",
            manBy: "thai",
            manCommentHead: "1234567890123",
            manSignatureHead: "1234567890123",
            manCommentDateHead: new Date(),
            manCommentHR:"not cat",
            manSignatureHR:"not cat",
            manCommentDateHR:new Date(),
            manSignatureByHR:"not cat",
            manCommentByHR:"not cat",
            manStatus:"WIP",
            manRemark:"has",
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ManPower', null);
  }
};