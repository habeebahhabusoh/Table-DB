'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('employees',
        [
          {
            employeeId: "88888",
            citizenId: "8888888888888",
            position: "Officer",
            section: "COE",
            department: "Human Resources",
            company: "IMPACT",
            level: "8",
            status: "TEST",
            startDate: "2021-08-01T00:00:00.069Z",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            employeeId: "44444",
            citizenId: "4444444444444",
            position: "Officer",
            section: "COE",
            department: "Human Resources",
            company: "IMPACT",
            level: "4",
            status: "TEST",
            startDate: "2021-08-01T00:00:00.069Z",
            createdAt: new Date(),
            updatedAt: new Date()   
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null);
  }
};