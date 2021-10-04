
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
            positionRequired: "it sup",
            level: "นาย",
            requestDate: new Date(),
            commencementDate: new Date(),
            no: "5",
            employeeType: "Mr",
            hiringPeriod: 2,
            sex: "cat",
            age: 25,
            education:"cat",
            major: "mit",
            experience: "yep",
            inField: "com",
            englishTestScore: "188",
            skillAndKnowledge: ["computer","AI"],
            requestedBy: "thai",
            positionRequisition: "thai",
            dateRequisition: new Date(),
            commentByDepartmentHead: "1234567890123",
            signatureByDepartmentHead: "1234567890123",
            dateByDepartmentHead: new Date(),
            commentByHRBP:"not cat",
            signatureHRBP:"not cat",
            dateHRBP:new Date(),
            signatureByDirectorHR:"not cat",
            dateByDirectorHR:new Date(),
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