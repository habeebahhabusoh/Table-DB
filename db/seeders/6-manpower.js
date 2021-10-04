
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('ManPower',
        [
          {
            manpowerID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c89",
            company : "test",
            department: "cat",
            section: "12000",
            position: "it sup",
            level: "นาย",
            requestDate: new Date(),
            startDate: new Date(),
            no: "5",
            staffType: "Mr",
            hiringPeriod: 2,
            sex: "cat",
            age: 25,
            education:"cat",
            major: "mit",
            experience: "yep",
            infield: "com",
            testScoreEN: "188",
            skill: "80",
            by: "thai",
            commentHead: "1234567890123",
            signatureHead: "1234567890123",
            commentDateHead: new Date(),
            commentHR:"not cat",
            signatureHR:"not cat",
            commentDateHR:new Date(),
            signatureByHR:"not cat",
            commentByHR:"not cat",
            status:"WIP",
            remark:"has",
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ManPower', null);
  }
};