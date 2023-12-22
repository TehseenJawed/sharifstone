const express = require("express");
const collectionRoute = require("./collection/collection.route");

const router = express.Router();

router.use("/collection", collectionRoute);

// router.use("affiliation");

module.exports = router;
