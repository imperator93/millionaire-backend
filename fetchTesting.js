const { questions, trueQuestions } = require("./testInputs.module");
const baseURL = "http://localhost:3000/question";

// fetch(baseURL)
// 	.then((response) => {
// 		!response.ok ? console.log("bad request") : response.json();
// 	})
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err));

// fetch(baseURL, {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(questions[2]),
// })
// 	.then((response) =>
// 		!response.ok ? console.log("bad request") : response.json()
// 	)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err));

// fetch("http://localhost:3000/question/66bec676ba67c7fa0774422b", {
// 	method: "PUT",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(updatedQuestions[0]),
// })
// 	.then((response) =>
// 		!response.ok ? console.log("bad request") : response.json()
// 	)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err));

// fetch("http://localhost:3000/question", {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(questions),
// })
// 	.then((response) =>
// 		!response.ok ? console.log("bad request") : response.json()
// 	)
// 	.then((data) => console.log(data));

// fetch("http://localhost:3000/true-questions", {
// 	method: "POST",
// 	headers: {
// 		"content-type": "application/json",
// 	},
// 	body: JSON.stringify(trueQuestions),
// })
// 	.then((response) => (!response.ok ? console.log("bad") : response.json()))
// 	.then((data) => console.log(data));

fetch("http://localhost:3000/true-questions")
	.then((response) => response.json())
	.then((data) => console.log(data));
