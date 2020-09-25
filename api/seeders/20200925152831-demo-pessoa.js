'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pessoas', [
       {
       nome: 'John Doe',
       ativo: true,
       email: 'johndoe@yahoo.com',
       role: 'docente',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      nome: 'André Lucas',
      ativo: true,
      email: 'andrelucas@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Marcio',
      ativo: true,
      email: 'marcio@yahoo.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Andreia',
      ativo: true,
      email: 'andreia@yahoo.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
