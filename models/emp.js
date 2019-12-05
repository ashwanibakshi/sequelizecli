'use strict';
module.exports = (sequelize, DataTypes) => {
  const emp = sequelize.define('emp', {
    name: DataTypes.STRING,
    salary: DataTypes.STRING,
    depId:{
      type:DataTypes.INTEGER,
      references:{
        model:'department',
        key:'id'
      }
    }
  }, {timestamps:false});
  emp.associate = function(models) {
    // associations can be defined here
    emp.belongsTo(models.department,{
      foreignKey:'id',
      target_Key:'depId'
    })
  };
  return emp;
};