


var TennisKeywords = ["t", "te", "ten", "tenn", "tenni", "tennis", "tennis game"];
var LudoKeywords = ["l", "lu", "lud", "ludo", "ludo game"];
var SnakeKeywords = ["s", "sn", "sna", "snak", "snake", "snake game"];
var QuizKeywords = ["q", "qu", "qui", "quiz", "quick", "quick quiz", "quiz game"];
var TetrisKeywords = ["t", "te", "tet", "tetr", "tetris", "tetris game"];
var FishKeywords = ["f", "fi", "fis", "fish", "fish game"];
var ReaganKeywords = ["r", "re", "rea", "reag", "reaga", "reagan", "reagan game"];
var MazeKeywords = ["m", "ma", "maz", "maze"];

//didn't used these varaible as we get a error if just use these
var TennisCard = document.getElementById("tennisgame");
var LudoCard = document.getElementById("ludogame");
var SnakeCard = document.getElementById("snakegame");
var QuizCard = document.getElementById("quizgame");
var TetrisCard = document.getElementById("tetrisgame");
var FishCard = document.getElementById("fishgame");
var ReaganCard = document.getElementById("reagangame");
var MazeCard = document.getElementById("mazegame");

var itsTennis = false;
var itsLudo = false;
var itsSnake = false;
var itsTetris = false;
var itsQuiz = false;
var itsFish = false;
var itsReagan = false;
var itsMaze = false;


//document.getElementById("searchbar").addEventListener("change", Search());
//document.getElementById("searchbar").addEventListener("click", Search());



function Reset() {
	document.getElementById("ludogame")?.style.display = 'block';
	document.getElementById("snakegame")?.style.display = 'block';
	document.getElementById("tennisgame")?.style.display = 'block';
	document.getElementById("tetrisgame")?.style.display = 'block';
	document.getElementById("quizgame")?.style.display = 'block';
	document.getElementById("fishgame")?.style.display = 'block';
	document.getElementById("reagangame")?.style.display = 'block';
	document.getElementById("mazegame")?.style.display = 'block';



};


function Search() {

	let SearchValue = document.getElementById("searchbar").value;
	SearchValue = SearchValue.toLowerCase();
	Reset();


	if (TennisKeywords.includes(SearchValue) == true) {
		itsTennis = true;
	}

	if (LudoKeywords.includes(SearchValue) == true) {
		itsLudo = true;
	}

	if (SnakeKeywords.includes(SearchValue) == true) {
		itsSnake = true;
	}

	if (TetrisKeywords.includes(SearchValue) == true) {
		itsTetris = true;
	}

	if (QuizKeywords.includes(SearchValue) == true) {
		itsQuiz = true;
	}

	if (FishKeywords.includes(SearchValue) == true) {
		itsQuiz = true;
	}

	if (ReaganKeywords.includes(SearchValue) == true) {
		itsQuiz = true;
	}

	if (MazeKeywords.includes(SearchValue) == true) {

	}


	//this statement for the case if entered value  does not match

	if (TennisKeywords.includes(SearchValue) == false) {
		if (LudoKeywords.includes(SearchValue) == false) {
			if (SnakeKeywords.includes(SearchValue) == false) {
				if (TetrisKeywords.includes(SearchValue) == false) {
					if (QuizKeywords.includes(SearchValue) == false) {
						if (FishKeywords.includes(SearchValue) == false) {
							if (ReaganKeywords.includes(SearchValue) == false) {
								if (MazeKeywords.includes(SearchValue) == false) {
									document.getElementById("ludogame").style.display = 'none';
									document.getElementById("snakegame").style.display = 'none';
									document.getElementById("tennisgame").style.display = 'none';
									document.getElementById("tetrisgame").style.display = 'none';
									document.getElementById("quizgame").style.display = 'none';
									document.getElementById("fishgame").style.display = 'none';
									document.getElementById("reagangame").style.display = 'none';
									document.getElementById("mazegame").style.display = 'none';
								}
							}
						}
					}
				}
			}
		}
	}


	if (itsTennis == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		itsTennis = false;
	}

	if (itsLudo == true) {
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		itsLudo = false;
	}

	if (itsSnake == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
	}

	if (itsTetris == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		itsTetris = false;
	}

	if (itsQuiz == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		itsQuiz = false;
	}

	if (itsFish == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
		itsFish = false;
	}

	if (itsReagan == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		itsReagan = false;
	}

	if (itsMaze == true) {
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
		itsMaze = false;
	}


	//Using this statement as we have t and te in two of the games name
	if ((SearchValue == 't') || (SearchValue == 'te')) {
		Reset();
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
	}

	if ((SearchValue == 'f') || (SearchValue == 'fi') || (SearchValue == 'fis') || (SearchValue == 'fish')) {
		Reset();
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
	}

	if ((SearchValue == 'r') || (SearchValue == 're') || (SearchValue == 'rea') || (SearchValue == 'reag') || (SearchValue == 'reaga') || (SearchValue == 'reagan')) {
		Reset();
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
	}

	if ((SearchValue == 'm') || (SearchValue == 'ma') || (SearchValue == 'maz') || (SearchValue == 'maze')) {
		Reset();
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
	}

	if ((SearchValue == 's') || (SearchValue == 'sn') || (SearchValue == 'sna') || (SearchValue == 'snak') || (SearchValue == 'snake')) {
		Reset();
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
	}

	if ((SearchValue == 'q') || (SearchValue == 'qu') || (SearchValue == 'qui') || (SearchValue == 'quiz')) {
		Reset();
		document.getElementById("ludogame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
	}

	if ((SearchValue == 'l') || (SearchValue == 'lu') || (SearchValue == 'lud') || (SearchValue == 'ludo')) {
		Reset();
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("snakegame").style.display = 'none';
		document.getElementById("quizgame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("tennisgame").style.display = 'none';
		document.getElementById("tetrisgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
	}


	if (SearchValue == '') {
		Reset();
	}


}

