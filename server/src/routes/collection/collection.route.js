const express = require("express");
const { collectionController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const upload = require("../../middlewares/upload");
const router = express.Router();

router
  .route("/")
//   .get(collectionController.createCollection)
  .post(upload.array("images"), collectionController.createCollection);

module.exports = router;
