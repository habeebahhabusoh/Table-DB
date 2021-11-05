'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ManPower', {
      manPowerID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      company: {
        allowNull: false,
        type: Sequelize.STRING
      },
      department: {
        allowNull: false,
        type: Sequelize.STRING
      },
      section: {
        allowNull: false,
        type: Sequelize.STRING
      },
      positionRequired: {
        allowNull: true,
        type: Sequelize.STRING
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      requestDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      commencementDate: {
        allowNull: false,
        type: Sequelize.DATE
      }, //วันที่เริ่มงาน
      numberOrder: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
       },
      employeeType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hiringPeriod: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sex: {
        allowNull: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      education: {
        allowNull: false,
        type: Sequelize.STRING
      },
      major: {
        allowNull: false,
        type: Sequelize.STRING
      },
      experience: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inField: {
        allowNull: false,
        type: Sequelize.STRING
      },
      englishTestScore: {
        allowNull: false,
        type: Sequelize.STRING   
    },
    skillAndKnowledge: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    requestedBy: {
      allowNull: false,
      type: Sequelize.STRING   
    },
    positionRequisition: {
      allowNull: false,
      type: Sequelize.STRING   
    },
    dateRequisition: {
      allowNull: false,
      type: Sequelize.DATE
    },
    commentByDepartmentHead: {
        allowNull: false,
        type: Sequelize.STRING
      },
    signatureByDepartmentHead: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    dateByDepartmentHead: {
        allowNull: false,
        type: Sequelize.DATE
      },
    commentByHRBP: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    signatureHRBP: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    dateHRBP: {
        allowNull: false,
        type: Sequelize.DATE   
      },
    signatureByDirectorHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
      dateByDirectorHR: {
        allowNull: false,
        type: Sequelize.DATE   
      },
    status: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    remark: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    createdAt:{
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt:{
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt:{
      allowNull: true,
      type: Sequelize.DATE,
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ManPower');
  }
};
