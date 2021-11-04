//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Post = require("./models/Post");
const Algo = require("./models/Algo");
const Category = require("./models/Category");
const AlgoType = require("./models/AlgoType");

//associations could go here!

Category.hasMany(Algo, { foreignKey: "categoryId" });
Algo.belongsTo(Category, { foreignKey: "categoryId" });

AlgoType.hasMany(Category, { foreignKey: "algoTypeId" });
Category.belongsTo(AlgoType, { foreignKey: "algoTypeId" });

module.exports = {
  db,
  models: {
    User,
    Post,
    Algo,
    Category,
    AlgoType,
  },
};
