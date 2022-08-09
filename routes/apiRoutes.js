const router = require("express").Router();
const Comment = require("../models/Comment");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { Upvote } = require("../models");
const { Downvote } = require("../models");
// const Downvote = require("../models/Downvote");

router.get("/interactive-comments-section/api/comments", async (req, res) => {
  await Comment.findAll({
    include: [
      {
        model: Upvote,
        attributes: ["id"],
      },
      {
        model: Downvote,
        attributes: ["id"],
      },
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/interactive-comments-section/api/users", async (req, res) => {
  await User.findAll({})
    .then((response) => res.json(response))
    .catch((error) => res.json(error.message));
});

router.post("/interactive-comments-section/api/comments", async (req, res) => {
  await Comment.create(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.post("/interactive-comments-section/api/login", async (req, res) => {
  await User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((userData) => {
      const token = signToken(userData);
      res.json({ userData, token });
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/interactive-comments-section/api/register", async (req, res) => {
  await User.create(req.body)
    .then((userData) => {
      const token = signToken(userData);
      res.json({ userData, token }); // assumes no hiccups sending token as json in response. Can then use this token and userData with context on front end per usual
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/interactive-comments-section/api/upvote", async (req, res) => {
  // have to make sure user cannot upvote/downvote a comment more than once
  // Search Upvote for item with both req.user_id and req.comment
  // if (
  //   Upvote.findOne({
  //     where: { comment_id: req.body.comment_id, user_id: req.body.user_id },
  //   })
  // ) {
  //   res.json("User has already commented on this post!");
  //   return;
  // }
  await Upvote.create(req.body)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/interactive-comments-section/api/downvote", async (req, res) => {
  await Downvote.create(req.body)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
