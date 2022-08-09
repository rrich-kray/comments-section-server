const Comment = require("../models/Comment");

const commentData = [
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 1,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 2,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 3,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 4,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 5,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 1,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 2,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 3,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 4,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 5,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 1,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 2,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 3,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 4,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 5,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 1,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 2,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 3,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 4,
  },
  {
    title: "This is a comment",
    content: "Sit consequat nulla mollit ad labore.",
    user_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
