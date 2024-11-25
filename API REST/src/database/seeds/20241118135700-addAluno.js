'use strict';
const { faker } = require('@faker-js/faker');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const alunos = [];

    for (let i = 1; i <= 100; i++) {
      alunos.push({
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        email: faker.internet.email(),
        idade: faker.number.int({ min: 18, max: 100 }),
        peso: faker.number.float({ min: 50, max: 120, precision: 0.1 }),
        altura: faker.number.float({ min: 1.5, max: 2.1, precision: 0.01 }),
        created_at: new Date(),
        updated_at: new Date()
      });
    }

      await queryInterface.bulkInsert('alunos', alunos, {});

  },

  async down(queryInterface, Sequelize) {
    // Remove os dados inseridos
    await queryInterface.bulkDelete('alunos', null, {});
  }
};
