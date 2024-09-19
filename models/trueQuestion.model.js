const mongoose = require("mongoose");
const question = require("./question.model");

const trueQuestion = question.schema.clone();

const TrueQuestion = mongoose.model("TrueQuestion", trueQuestion);

module.exports = TrueQuestion;
