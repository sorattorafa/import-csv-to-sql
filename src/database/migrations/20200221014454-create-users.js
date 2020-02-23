
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    list: {
      type: Sequelize.ENUM,
      values: ['1', '2', '1, 2'],
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }),

  down: queryInterface => queryInterface.dropTable('users'),
};
