'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const adminPass = await bcrypt.hash('admin12345', 10);
    const memberPass = await bcrypt.hash('member12345', 10);

    await queryInterface.bulkInsert('Users', [
      { name: 'Juan Dela Cruz', email: 'juan@example.com', password: adminPass, role: 'admin', createdAt: now, updatedAt: now },
      { name: 'Maria Santos', email: 'maria@example.com', password: memberPass, role: 'member', createdAt: now, updatedAt: now },
      { name: 'Pedro Reyes', email: 'pedro@example.com', password: memberPass, role: 'member', createdAt: now, updatedAt: now },
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const idOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Finish GT9', dueDate: '2026-09-02', completed: false, userId: idOf('Juan Dela Cruz'), createdAt: now, updatedAt: now },
      { title: 'Review Auth docs', dueDate: '2026-08-30', completed: true, userId: idOf('Juan Dela Cruz'), createdAt: now, updatedAt: now },
      { title: 'Submit Task', dueDate: '2026-09-02', completed: false, userId: idOf('Maria Santos'), createdAt: now, updatedAt: now },
      { title: 'Test Postman collection', dueDate: '2026-09-01', completed: false, userId: idOf('Maria Santos'), createdAt: now, updatedAt: now },
      { title: 'Update README', dueDate: '2026-09-02', completed: false, userId: idOf('Pedro Reyes'), createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};