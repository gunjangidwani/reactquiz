const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("quizquestion", questionSchema);
