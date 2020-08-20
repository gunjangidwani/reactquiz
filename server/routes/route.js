const router = require("express").Router();
const questionCtrl = require("../controllers/question.controller");

router
  .route("/question")
  .post(questionCtrl.create)
  .get(questionCtrl.getAllQuestion);

module.exports = router;
