'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Inventory,{
        foreignKey: 'vaccineId',
      });
      
    }
  }
  Vaccine.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true  
    },
    mrp: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Vaccine',
  });
  return Vaccine;
};