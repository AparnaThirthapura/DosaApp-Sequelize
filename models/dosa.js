module.exports = function(sequelize, DataTypes){
  var dosa = sequelize.define("dosa", {
    dosaName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    savoured:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:0
    },
    date:{
      type:DataTypes.DATE
    }
  });
  return dosa;
};
