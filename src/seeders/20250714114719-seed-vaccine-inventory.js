'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Inventories', [{
      batchNumber: 'BATCH001',
      quantity: 100,
      expiryDate: new Date('2025-12-31'),
      vaccineId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      batchNumber: 'BATCH002',
      quantity: 200,
      expiryDate: new Date('2026-12-30'),
      vaccineId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
