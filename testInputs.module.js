const questions = [
	{
		num: 1,
		content: '1. In what children\'s game are participants chased by someone designated "It"?',
		isCurrentQuestion: true,
		answers: [
			{ content: "Tag", isCorrect: true },
			{ content: "Simon Says", isCorrect: false },
			{ content: "Charades", isCorrect: false },
			{ content: "Hopscotch", isCorrect: false },
		],
	},
	{
		num: 2,
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
		num: 3,
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
		num: 4,
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
		num: 5,
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
		num: 6,
		content: "6. Galileo was an Italian astronomer who...?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Developed the telescope", isCorrect: false },
			{ content: "Discovered four satellites of Jupiter", isCorrect: false },
			{
				content: "Discovered that the movement of pendulum produces a regular time measurement",
				isCorrect: false,
			},
			{ content: "All of the above", isCorrect: true },
		],
	},
];

const trueQuestions = [
	{
		num: 1,
		content: "1. Tko je najveći četnik na svijetu?",
		isCurrentQuestion: true,
		answers: [
			{ content: "Mulj", isCorrect: false },
			{ content: "Korač", isCorrect: true },
			{ content: "Kum Dado", isCorrect: false },
			{ content: "Berara", isCorrect: false },
		],
	},
	{
		num: 2,
		content: "2. Tko je onaj čije se ime ne spominje?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Moslavac", isCorrect: true },
			{ content: "Dvoslavac", isCorrect: false },
			{ content: "Ivo Sanader", isCorrect: false },
			{ content: "Pobjednik Dore 2005", isCorrect: false },
		],
	},
	{
		num: 3,
		content: "3. Uz Dacru koje je koračevo drugo scensko ime?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Crux", isCorrect: false },
			{ content: "Katerpilar", isCorrect: false },
			{ content: "Bolesnik Odvratni", isCorrect: false },
			{ content: "Tekknu", isCorrect: true },
		],
	},
	{
		num: 4,
		content: "4. Tko je napravio svjetski poznatu kompilaciju sniper killova na yt imena `Sniping is easy now`?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Crepke", isCorrect: true },
			{ content: "Parmak", isCorrect: false },
			{ content: "Dobreta", isCorrect: false },
			{ content: "Korenički", isCorrect: false },
		],
	},
	{
		num: 5,
		content: "5. Koja je CoD mapa poznata i kao `kemperska` mapa",
		isCurrentQuestion: false,
		answers: [
			{ content: "Carentan", isCorrect: true },
			{ content: "Beltot", isCorrect: false },
			{ content: "Railyard", isCorrect: false },
			{ content: "Brecourt", isCorrect: false },
		],
	},
	{
		num: 6,
		content:
			"6. Koliko je najveći streak pobjeda koji su korač i bimbo kao duo imali u fortniteu (ne računajuči avione)?",
		isCurrentQuestion: false,
		answers: [
			{ content: "5", isCorrect: false },
			{ content: "8", isCorrect: false },
			{ content: "9", isCorrect: true },
			{ content: "13", isCorrect: false },
		],
	},
	{
		num: 7,
		content: "7. U CoD-u koja je komanda koja se šalje prijatelju ako zaboravi komandu za namjestiti polygone?",
		isCurrentQuestion: false,
		answers: [
			{ content: "/com polygonoffsetbias <num>", isCorrect: false },
			{ content: "/r polygonoffsetbias <num>", isCorrect: false },
			{ content: "/rcon polygonoffsetbias <num>", isCorrect: false },
			{ content: "/cp polygonoffsetbias <num>", isCorrect: true },
		],
	},
	{
		num: 8,
		content:
			"8. Tko je vozio automobil koji se sudario u auto u kojem je bio afk korač i time ubio sve sudionike u okršaju?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Bimbo", isCorrect: false },
			{ content: "Mulj", isCorrect: true },
			{ content: "Heblja", isCorrect: false },
			{ content: "Korač se zabio sam u sebe", isCorrect: false },
		],
	},
	{
		num: 9,
		content: "9. Koja od ovih ruta nakon slijetanja u fortnite-u je točna?",
		isCurrentQuestion: false,
		answers: [
			{ content: "lodge, kontejneri, salty-springs", isCorrect: false },
			{ content: "hamlet, polar-peak, dusty-kuća-časti", isCorrect: false },
			{ content: "flush, disko, fatal-fields", isCorrect: true },
			{ content: "snobby, titled, lucky-landing", isCorrect: false },
		],
	},
	{
		num: 10,
		content: "10. Kojeg championa je mulj igrao najviše u Paladinsima?",
		isCurrentQuestion: false,
		answers: [
			{ content: "doktor drogoz", isCorrect: false },
			{ content: "saati koliko je sati", isCorrect: false },
			{ content: "skaya polizes mi jaja", isCorrect: true },
			{ content: "bomb king popušiš mi kurac", isCorrect: false },
		],
	},
	{
		num: 11,
		content: "11. Koja je srpska pjesma vječno ostala izgubljena?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Braćo srbi", isCorrect: false },
			{ content: "To je srpska istorija", isCorrect: true },
			{ content: "Orlovi grmeća", isCorrect: false },
			{ content: "Crni bombarder", isCorrect: false },
		],
	},
	{
		num: 12,
		content: "12. Koju profesiju Ashow najviše igra u Guild Wars 2?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Necromancer", isCorrect: true },
			{ content: "Warrior", isCorrect: false },
			{ content: "Elementalist", isCorrect: false },
			{ content: "Mesmer", isCorrect: false },
		],
	},
	{
		num: 13,
		content: "13. Koja je Krunina nesuđena?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Mirjana", isCorrect: false },
			{ content: "Danijela", isCorrect: false },
			{ content: "Vesna", isCorrect: false },
			{ content: "Milena", isCorrect: true },
		],
	},
	{
		num: 14,
		content: "14. Tko je prvi na diskordu pustio pjesmu `Poginuše hrabro borci`?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Kruno", isCorrect: false },
			{ content: "Ashow", isCorrect: false },
			{ content: "Knežo", isCorrect: true },
			{ content: "Pajo", isCorrect: false },
		],
	},
	{
		num: 15,
		content: "15. Tko je kriv za raspad družine korač-mulj-bimbo?",
		isCurrentQuestion: false,
		answers: [
			{ content: "Korač", isCorrect: false },
			{ content: "Mulj", isCorrect: false },
			{ content: "Bimbo", isCorrect: false },
			{ content: "Zna se", isCorrect: true },
		],
	},
];

module.exports = { questions, trueQuestions };
