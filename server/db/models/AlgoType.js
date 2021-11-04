const Sequelize = require("sequelize");
const db = require("../db");

const AlgoType = db.define("algoType", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = AlgoType;
