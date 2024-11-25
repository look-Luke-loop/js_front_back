"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('fotos', {
      id: {
      type: Sequelize.INTEGER,
      allowNull:     false,
      autoIncrement: true,
      primaryKey:    true,
      },

      originalname: {
        type: Sequelize.STRING,
        allowNull:     false,
      },

      filename: {
        type: Sequelize.STRING,
        allowNull:     false,
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull:     false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull:     false,
      }
  });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('fotos');

  }
};
