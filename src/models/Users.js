const { sequelize, DataTypes } = require("../../database");
const { Post } = require("./Posts");
const { Comment } = require("./Comments");

console.log("hello");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});
User.hasMany(Post);
Comment.belongsTo(User);

module.exports = { User };
