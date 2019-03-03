'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
    'Links',
    'userId',
    Sequelize.STRING
  );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
    'Links',
    'userId',
    Sequelize.STRING
  );
  }
};