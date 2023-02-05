'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('languages',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      language: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      words: {
        type: Sequelize.JSON,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('languages');
  }
};
