'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Vaccine, {
        foreignKey: 'vaccineId',
        onDelete: 'CASCADE'
      });
    }
  }
  Inventory.init({
    batchNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
    vaccineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
}; 