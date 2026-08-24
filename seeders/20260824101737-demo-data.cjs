'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'Juan Dela Cruz', email: 'juan@example.com', createdAt: now, updatedAt: now },
      { name: 'Maria Santos', email: 'maria@example.com', createdAt: now, updatedAt: now },
      { name: 'Pedro Reyes', email: 'pedro@example.com', createdAt: now, updatedAt: now },
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const idOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Finish GT8', dueDate: '2026-08-26', completed: false, userId: idOf('Juan Dela Cruz'), createdAt: now, updatedAt: now },
      { title: 'Review Sequelize docs', dueDate: '2026-08-20', completed: true, userId: idOf('Juan Dela Cruz'), createdAt: now, updatedAt: now },
      { title: 'Submit Midterm Project', dueDate: '2026-08-26', completed: false, userId: idOf('Maria Santos'), createdAt: now, updatedAt: now },
      { title: 'Test Postman collection', dueDate: '2026-08-25', completed: false, userId: idOf('Maria Santos'), createdAt: now, updatedAt: now },
      { title: 'Update README', dueDate: '2026-08-26', completed: false, userId: idOf('Pedro Reyes'), createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};