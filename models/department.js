'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    name: DataTypes.STRING
  }, {timestamps:false});
  department.associate = function(models) {
    // associations can be defined here
    department.hasMany(models.emp,{
      foreignKey:'depId'
    })
  };
  return department;
};