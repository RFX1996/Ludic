var FishKeywords = ["f", "fi", "fis", "fish"];
var ReaganKeywords = ["r", "re", "rea", "reag", "reaga", "reagan"];
var MazeKeywords = ["m", "ma", "maz", "maze"];
var ProjectKeywords = ["p", "pr", "pro", "proj", "proje", "projec", "project"];
var TetrissKeywords = ["t", "te", "tet", "tetr", "tetris"];
var PingKeywords = ["p", "pi", "pin", "ping", "pingp"];



//didn't used these varaible as we get a error if just use these
var FishCard = document.getElementById("fishgame");
var ReaganCard = document.getElementById("reagangame");
var MazeCard = document.getElementById("mazegame");
var ProjectCard = document.getElementById("project");
var TetrissCard = document.getElementById("tetris");
var PingCard = document.getElementById("pingpong");


var itsFish = false;
var itsReagan = false;
var itsMaze = false;
var itsProject = false;
var itsTetriss = false;
var itsPing = false;




//document.getElementById("searchbar").addEventListener("change", Search());
//document.getElementById("searchbar").addEventListener("click", Search());



function Reset() {
	document.getElementById("fishgame").style.display = 'block';
	document.getElementById("reagangame").style.display = 'block';
	document.getElementById("mazegame").style.display = 'block';
	document.getElementById("project").style.display = 'block';
	document.getElementById("tetris").style.display = 'block';
	document.getElementById("pingpong").style.display = 'block';

};


function Search() {

	let SearchValue = document.getElementById("searchbar").value;
	SearchValue = SearchValue.toLowerCase();
	Reset();


	if (FishKeywords.includes(SearchValue) == true) {
		itsFish = true;
	}

	if (ReaganKeywords.includes(SearchValue) == true) {
		itsReagan = true;
	}

	if (MazeKeywords.includes(SearchValue) == true) {
		itsMaze = true;
	}

	if (TetrissKeywords.includes(SearchValue) == true) {
		itsTetriss = true;
	}

	if (ProjectKeywords.includes(SearchValue) == true) {
		itsProject = true;
	}

	if (PingKeywords.includes(SearchValue) == true) {
		itsPing = true;
	}





	//this statement for the case if entered value  does not match

	if (FishKeywords.includes(SearchValue) == false) {
		if (ReaganKeywords.includes(SearchValue) == false) {
			if (MazeKeywords.includes(SearchValue) == false) {
				if (TetrissKeywords.includes(SearchValue) == false) {
					if (ProjectKeywords.includes(SearchValue) == false) {
						if (PingKeywords.includes(SearchValue) == false) {
							document.getElementById("fishgame").style.display = 'none';
							document.getElementById("reagangame").style.display = 'none';
							document.getElementById("mazegame").style.display = 'none';
							document.getElementById("tetris").style.display = 'none';
							document.getElementById("project").style.display = 'none';
							document.getElementById("pinpong").style.display = 'none';
						}
					}
				}
			}
		}
	}




	if (itsFish == true) {
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
		itsFish = false;
	}

	if (itsReagan == true) {
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
		itsReagan = false;
	}

	if (itsMaze == true) {
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
		itsMaze = false;
	}

	if (itsTetriss == true) {
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
		itsTetriss = false;
	}

	if (itsProject == true) {
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
		itsProject = false;
	}

	if (itsPing == true) {
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		itsPing = false;
	}




	//Using this statement as we have t and te in two of the games name
	if ((SearchValue == 'f') || (SearchValue == 'fi') || (SearchValue == 'fis') || (SearchValue == 'fish')) {
		Reset();
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
		document.getElementById("project").style.display = 'none';
	}

	if ((SearchValue == 'r') || (SearchValue == 're') || (SearchValue == 'rea') || (SearchValue == 'reag') || (SearchValue == 'reaga') || (SearchValue == 'reagan')) {
		Reset();
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';

	}


	if ((SearchValue == 'm') || (SearchValue == 'ma') || (SearchValue == 'maz') || (SearchValue == 'maze')) {
		Reset();
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';

	}

	if ((SearchValue == 'p') || (SearchValue == 'pr') || (SearchValue == 'pro') || (SearchValue == 'proj')) {
		Reset();
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
	}

	if ((SearchValue == 't') || (SearchValue == 'te') || (SearchValue == 'tet') || (SearchValue == 'tetr')) {
		Reset();
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("pingpong").style.display = 'none';
	}

	if ((SearchValue == 'p') || (SearchValue == 'pi') || (SearchValue == 'pin') || (SearchValue == 'ping')) {
		Reset();
		document.getElementById("reagangame").style.display = 'none';
		document.getElementById("fishgame").style.display = 'none';
		document.getElementById("mazegame").style.display = 'none';
		document.getElementById("project").style.display = 'none';
		document.getElementById("tetris").style.display = 'none';
	}

	if (SearchValue == '') {
		Reset();
	}
}
