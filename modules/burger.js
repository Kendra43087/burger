var Sequelize = require("sequelize");

var sequelize = require("../config/burger.js");


var Burger= sequelize.define("burger", {
  
  id: Sequelize.INTEGER,
  
  burger_name: Sequelize.STRING,
  
  devoured: Sequelize.BOOLEAN,
  
});


Burger.sync();


module.exports = Burger;
