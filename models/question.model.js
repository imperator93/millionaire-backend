const mongoose = require("mongoose");

//so bad without typescript
const question = mongoose.Schema({
	content: String,
	isCurrentQuestion: Boolean,
	answers: [
		{ content: String, isCorrect: Boolean },
		{ content: String, isCorrect: Boolean },
		{ content: String, isCorrect: Boolean },
		{ content: String, isCorrect: Boolean },
	],
});

const Question = mongoose.model("Question", question);

module.exports = Question;
