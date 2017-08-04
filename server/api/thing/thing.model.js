'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Thing', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'things'

  });
};
//# sourceMappingURL=thing.model.js.map
