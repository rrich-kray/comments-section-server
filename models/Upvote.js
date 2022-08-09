const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Upvote extends Model {}

Upvote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },

    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "comment",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: "upvote",
  }
);

module.exports = Upvote;
