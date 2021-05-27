const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('KubernetesFunFacts', {
      id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      fun_fact: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('KubernetesFunFacts');
  }
};
