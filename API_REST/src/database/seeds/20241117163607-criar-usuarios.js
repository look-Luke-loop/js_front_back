const bcryptjs = require ('bcryptjs');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Alice Silva',
          sobrenome: 'lalaland',
          email: 'alice@lalaland.com',
          password_hash: await bcryptjs.hash('senha123', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Bob Santos',
          sobrenome: 'lalaland',
          email: 'bob@lalaland.com',
          password_hash: await bcryptjs.hash('mypassword', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Carlos Lima',
          email: 'carlos@lalaland.com',
          sobrenome: 'lalaland',
          password_hash: await bcryptjs.hash('securepass', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Daniela Costa',
          sobrenome: 'lalaland',
          email: 'daniela@lalaland.com',
          password_hash: await bcryptjs.hash('senha456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Eduardo Oliveira',
          sobrenome: 'lalaland',
          email: 'eduardo@lalaland.com',
          password_hash: await bcryptjs.hash('pass123', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Fernanda Souza',
          sobrenome: 'lalaland',
          email: 'fernanda@lalaland.com',
          password_hash: await bcryptjs.hash('secure1234', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Gabriel Mendes',
          sobrenome: 'lalaland',
          email: 'gabriel@lalaland.com',
          password_hash: await bcryptjs.hash('minhasenha', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Helena Nunes',
          sobrenome: 'lalaland',
          email: 'helena@lalaland.com',
          password_hash: await bcryptjs.hash('nova1234', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Igor Cardoso',
          sobrenome: 'lalaland',
          email: 'igor@lalaland.com',
          password_hash: await bcryptjs.hash('password987', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Julia Martins',
          sobrenome: 'lalaland',
          email: 'julia@lalaland.com',
          password_hash: await bcryptjs.hash('senha789', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    , {});

  },

  async down() {}
};
