const router = require("express").Router();
const {
  models: { Algo, AlgoType, Category },
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
    const algos = await Algo.findAll();

    if (algos.length) {
      res.status(200).json(algos);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/algoTypes", authRequired, async (req, res, next) => {
  try {
    const algoTypes = await AlgoType.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });

    if (algoTypes.length) {
      res.status(200).json(algoTypes);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id", authRequired, async (req, res, next) => {
  try {
    const currAlgo = await Algo.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (currAlgo.id) {
      res.status(200).json(currAlgo);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", authRequired, async (req, res, next) => {
  try {
    if (req.userId) {
      let newAlgo = await Algo.create(req.body);

      res.status(201).json(newAlgo);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", authRequired, async (req, res, next) => {
  try {
    if (req.userId) {
      const deleteCount = await Algo.destroy({
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
      const updatedAlgo = await Algo.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });

      res.status(200).json(updatedAlgo);
    }
  } catch (err) {
    next(err);
  }
});
