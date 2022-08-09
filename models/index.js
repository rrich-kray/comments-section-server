const User = require("./User");
const Comment = require("./Comment");
const Upvote = require("./Upvote");
const Downvote = require("./Downvote");

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.hasMany(Upvote, {
  foreignKey: "comment_id",
});

Upvote.belongsTo(Comment, {
  foreignKey: "comment_id",
});

Comment.hasMany(Downvote, {
  foreignKey: "comment_id",
});

Downvote.belongsTo(Comment, {
  foreignKey: "comment_id",
});

module.exports = { User, Comment, Upvote, Downvote };
