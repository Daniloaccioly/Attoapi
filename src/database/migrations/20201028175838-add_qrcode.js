'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users',
      'qrcode',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    );

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn('users', 'qrcode');
  }
}