const router = require("express").Router();
const {
  models: { Post },
} = require("../db");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT;
module.exports = router;

const authRequired = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const { id } = await jwt.verify(token, secret);
    req.userId = id;
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "Unauthorized",
    });
    return;
  }
  next();
};

router.get("/", authRequired, async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      order: ["date"],
    });

    if (posts.length) {
      res.status(200).json(posts);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id", authRequired, async (req, res, next) => {
  try {
    const currPost = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (currPost.id) {
      res.status(200).json(currPost);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", authRequired, async (req, res, next) => {
  try {
    if (req.userId) {
      let newPost = await Post.create(req.body);

      res.status(201).json(newPost);
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/posts/:id
router.delete("/:id", authRequired, async (req, res, next) => {
  try {
    if (req.userId) {
      const deleteCount = await Post.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json(deleteCount);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", authRequired, async (req, res, next) => {
  try {
    if (req.userId) {
      const updatedPost = await Post.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });

      res.status(200).json(updatedPost);
    }
  } catch (err) {
    next(err);
  }
});
