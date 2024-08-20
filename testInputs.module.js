const questions = [
	{
		content:
			'1. In what children\'s game are participants chased by someone designated "It"?',
		isCurrentQuestion: true,
		answers: [
			{ content: "Tag", isCorrect: true },
			{ content: "Simon Says", isCorrect: false },
			{ content: "Charades", isCorrect: false },
			{ content: "Hopscotch", isCorrect: false },
		],
	},
	{
		content: "2. On a radio, stations are changed by using what control?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Tuning", isCorrect: true },
			{ content: "Volume", isCorrect: false },
			{ content: "Bass", isCorrect: false },
			{ content: "Treble", isCorrect: false },
		],
	},
	{
		content: "3. Which material is most dense?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Silver", isCorrect: false },
			{ content: "Styrofoam", isCorrect: false },
			{ content: "Butter", isCorrect: true },
			{ content: "Gold", isCorrect: false },
		],
	},
	{
		content: "4. Which state in the United States is largest by area?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Alaska", isCorrect: true },
			{ content: "California", isCorrect: false },
			{ content: "Texas", isCorrect: false },
			{ content: "Hawaii", isCorrect: false },
		],
	},
	{
		content: "5. What is Aurora Borealis commonly known as?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Fairy Dust", isCorrect: false },
			{ content: "Northern Lights", isCorrect: true },
			{ content: "Book of ages", isCorrect: false },
			{ content: "A Game of Thrones main character", isCorrect: false },
		],
	},
	{
		content: ". Galileo was an Italian astronomer who...?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Developed the telescope", isCorrect: false },
			{ content: "Discovered four satellites of Jupiter", isCorrect: false },
			{
				content:
					"Discovered that the movement of pendulum produces a regular time measurement",
				isCorrect: false,
			},
			{ content: "All of the above", isCorrect: true },
		],
	},
];

const updatedQuestions = [
	{
		content: "1. koliko je bicikla",
		isCurrentQuestion: false,
		answers: [
			{ content: "Jedan", isCorrect: false },
			{ content: "Dva", isCorrect: true },
			{ content: "Tri", isCorrect: false },
			{ content: "Četiri", isCorrect: false },
		],
	},
];

module.exports = { questions, updatedQuestions };
