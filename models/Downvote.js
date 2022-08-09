const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Downvote extends Model {}

Downvote.init(
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
    modelName: "downvote",
  }
);

module.exports = Downvote;
