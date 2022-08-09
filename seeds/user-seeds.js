const User = require("../models/User");

const userData = [
  {
    first_name: "John",
    last_name: "Smith",
    email: "johnsmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Joe",
    last_name: "Smith",
    email: "joesmith@gmail.com",
    password: "password",
  },
  {
    first_name: "James",
    last_name: "Smith",
    email: "jamessmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Pat",
    last_name: "Smith",
    email: "patsmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Jimmy",
    last_name: "Smith",
    email: "jimmysmith@gmail.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
