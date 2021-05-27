const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../db/sequelize");

class MicrosoftFunFacts extends Model {}

MicrosoftFunFacts.init({
  // Model attributes are defined here
  id:{
    type:Sequelize.INTEGER(11),
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  fun_fact: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'MicrosoftFunFacts' // We need to choose the model name
});

// the defined model is the class itself
console.log(`MicrosoftFunFacts Model: ${MicrosoftFunFacts === sequelize.models.MicrosoftFunFacts}`); // true

module.exports = MicrosoftFunFacts;