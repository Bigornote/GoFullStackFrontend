const express = require("express");
const auth = require("../middleware/auth");
const stuffControllers = require("../controllers/stuff");

const router = express.Router();

router.post("/", auth, stuffControllers.createThing);

router.put("/:id", auth, stuffControllers.modifyThing);

router.delete("/:id", auth, stuffControllers.deleteThing);

router.get("/:id", auth, stuffControllers.getOneThing);

router.get("/", auth, stuffControllers.getAllThings);

module.exports = router;

// Les controllers permettent de voir les routes dispo, et de connaitre la logique de chaque fonction (la logique métier)
