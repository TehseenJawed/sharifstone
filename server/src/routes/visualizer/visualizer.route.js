const { Router } = require("express");
const { visualizerController } = require("../../controllers");
const upload = require("../../middlewares/upload");

const router = Router();

router
  .route("/")
  .post(visualizerController.createVisualizer)
  .get(visualizerController.getAllVisualizer);

module.exports = router;
