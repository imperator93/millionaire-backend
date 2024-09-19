const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Question = require("./models/question.model");
const TrueQuestion = require("./models/trueQuestion.model");

const app = express();
app.use(express.json());
app.use(cors());
mongoose
	.connect(
		`mongodb+srv://leo-binbauer:${process.env.DATABASE_KEY}@millionaire-questions.ubtzv.mongodb.net/?retryWrites=true&w=majority&appName=millionaire-questions`
	)
	.then(() => {
		console.log("connected");
		app.listen(3000, () => {
			console.log("server running on port 3000");
		});
	});

//get home
app.get("/", async (req, res) => {
	try {
		res.status(200).json({
			message: "get home",
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

//get-all
app.get("/question", async (req, res) => {
	try {
		const questions = await Question.find({});
		res.status(200).json({
			questions,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

app.post("/question", async (req, res) => {
	try {
		const question = await Question.create(req.body);
		res.status(200).json(question);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

app.put("/question/:id", async (req, res) => {
	try {
		const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(question);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

app.delete("/question/:id", async (req, res) => {
	try {
		await Question.findByIdAndDelete(req.params.id);
		res.status(200).json({
			message: "question deleted",
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

//true questions
app.post("/true-questions", async (req, res) => {
	try {
		const trueQuestion = await TrueQuestion.create(req.body);
		res.status(200).json({
			message: "question created",
			trueQuestion,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

app.get("/true-questions", async (req, res) => {
	try {
		const trueQuestions = await TrueQuestion.find({});
		res.status(200).json({
			trueQuestions: trueQuestions,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});
