const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
  subtitle: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Post;
