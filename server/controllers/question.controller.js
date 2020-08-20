const Question = require("../models/question.model");
const respCtrl = require("./response.controller");

exports.create = (req, res) => {
  let question = new Question();
  question = Object.assign(question, req.body);
  console.log(question);
  question.save((err) => {
    if (err) res.json(respCtrl.response(false, err));
    res.json(respCtrl.response(true, question));
  });
};

exports.getAllQuestion = (req, res) => {
  Question.find({}, (err, data) => {
    if (err) res.json(respCtrl.response(false, err));
    res.json(respCtrl.response(true, data));
  });
};
