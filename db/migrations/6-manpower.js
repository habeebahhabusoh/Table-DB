'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ManPower', {
      manID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      manCompany: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manDepartment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manSection: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manPosition: {
        allowNull: true,
        type: Sequelize.STRING
      },
      manLevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manRequestDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      manStartDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      manNo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manStaffType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manHiringPeriod: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      manSex: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manAge: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      manEducation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manMajor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manExperience: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manInfield: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manTestScoreEN: {
        allowNull: false,
        type: Sequelize.STRING   
    },
    manSkill: {
      allowNull: false,
      type: Sequelize.STRING
    },
    manBy: {
      allowNull: false,
      type: Sequelize.STRING   
    },
    manCommentHead: {
        allowNull: false,
        type: Sequelize.STRING
      },
    manSignatureHead: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    manCommentDateHead: {
        allowNull: false,
        type: Sequelize.DATE
      },
    manCommentHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    manSignatureHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    manCommentDateHR: {
        allowNull: false,
        type: Sequelize.DATE   
      },
    manSignatureByHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    manCommentByHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    manStatus: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    manRemark: {
        allowNull: false,
        type: Sequelize.STRING   
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ManPower');
  }
};
