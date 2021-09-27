const router = require("express").Router();
const { Party, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log("=======================");
  Party.findAll({
    attributes: ["party_name"],
    // order: [['created_at', 'DESC']],
    // include: {
    //     model: User,
    //     attributes: ['id']
    // }
  })
    .then((dbPartyData) => res.json(dbPartyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:user_id", withAuth, (req, res) => {
  console.log("=====================");
  Party.findOne({
    where: {
      user_id: req.session.user_id,
    },
  });
});

router.post("/", withAuth, (req, res) => {
  Party.create({
    party_name: req.body.party_name,
  })
    .then((dbPartyData) => res.json(dbPartyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Party.update(
    {
      party_name: req.body.party_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPartyData) => {
      if (!dbPartyData[0]) {
        res.status(404).json({ message: "No party found with this id " });
        return;
      }
      res.json(dbPartyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Party.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPartyData) => {
      if (!dbPartyData) {
        res.status(404).json({ message: "No party found with this id" });
        return;
      }
      res.json(dbPartyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
