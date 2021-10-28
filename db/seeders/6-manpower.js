
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('ManPower',
        [
          {
            manPowerID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c89",
            company : "test",
            department: "test cat",
            section: "12000",
            positionRequired: "it sup",
            level: "5",
            requestDate: new Date(),
            commencementDate: new Date(),
            numberOrder: 9,
            employeeType: "Destroy",
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
            commentByDepartmentHead: "ok",
            signatureByDepartmentHead: "Sura",
            dateByDepartmentHead: new Date(),
            commentByHRBP:"Ok",
            signatureHRBP:"Sarara",
            dateHRBP:new Date(),
            signatureByDirectorHR:"Sora ",
            dateByDirectorHR:new Date(),
            status:"WIP",
            remark:"has",
            createdAt:new Date(),
            updatedAt:new Date(),
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ManPower', null);
  }
};