
var TennisKeywords = ["t", "te", "ten", "tenn", "tenni", "tennis", "tennis game"];
var LudoKeywords = ["l", "lu", "lud", "ludo", "ludo game"];
var SnakeKeywords = ["s", "sn", "sna", "snak", "snake", "snake game"];
var QuizKeywords = ["q", "qu", "qui", "quiz", "quick", "quick quiz", "quiz game"];
var TetrisKeywords = ["t", "te", "tet", "tetr", "tetris", "tetris game"];
var PacKeywords = ["p", "pa", "pac", "pacm", "pacman"];



//didn't used these varaible as we get a error if just use these
var TennisCard = document.getElementById("tennisgame");
var LudoCard = document.getElementById("ludogame");
var SnakeCard = document.getElementById("snakegame");
var QuizCard = document.getElementById("quizgame");
var TetrisCard = document.getElementById("tetrisgame");
var PacCard = document.getElementById("pacman");


var itsTennis = false;
var itsLudo = false;
var itsSnake = false;
var itsTetris = false;
var itsQuiz = false;
var itsPac = false;




//document.getElementById("searchbar").addEventListener("change", Search());
//document.getElementById("searchbar").addEventListener("click", Search());



function Reset() {
    document.getElementById("ludogame").style.display = 'block';
    document.getElementById("snakegame").style.display = 'block';
    document.getElementById("tennisgame").style.display = 'block';
    document.getElementById("tetrisgame").style.display = 'block';
    document.getElementById("quizgame").style.display = 'block';
    document.getElementById("pacman").style.display = 'block';

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

    if (PacKeywords.includes(SearchValue) == true) {
        itsQuiz = true;
    }





    //this statement for the case if entered value  does not match

    if (TennisKeywords.includes(SearchValue) == false) {
        if (LudoKeywords.includes(SearchValue) == false) {
            if (SnakeKeywords.includes(SearchValue) == false) {
                if (TetrisKeywords.includes(SearchValue) == false) {
                    if (QuizKeywords.includes(SearchValue) == false) {
                        if (PacKeywords.includes(SearchValue) == false) {
                            document.getElementById("ludogame").style.display = 'none';
                            document.getElementById("snakegame").style.display = 'none';
                            document.getElementById("tennisgame").style.display = 'none';
                            document.getElementById("tetrisgame").style.display = 'none';
                            document.getElementById("quizgame").style.display = 'none';
                            document.getElementById("pacman").style.display = 'none';
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
        document.getElementById("pacman").style.display = 'none';
        itsTennis = false;
    }

    if (itsLudo == true) {
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
        itsLudo = false;
    }

    if (itsSnake == true) {
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
        itsSnake = false;
    }

    if (itsTetris == true) {
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
        itsTetris = false;
    }

    if (itsQuiz == true) {
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
        itsQuiz = false;
    }

    if (itsPac == true) {
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        itsPac = false;
    }




    //Using this statement as we have t and te in two of the games name
    if ((SearchValue == 't') || (SearchValue == 'te')) {
        Reset();
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
    }

    if ((SearchValue == 'p') || (SearchValue == 'pa') || (SearchValue == 'pac') || (SearchValue == 'pacm')) {
        Reset();
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';

    }


    if ((SearchValue == 's') || (SearchValue == 'sn') || (SearchValue == 'sna') || (SearchValue == 'snak') || (SearchValue == 'snake')) {
        Reset();
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';

    }

    if ((SearchValue == 'q') || (SearchValue == 'qu') || (SearchValue == 'qui') || (SearchValue == 'quiz')) {
        Reset();
        document.getElementById("ludogame").style.display = 'none';
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
    }

    if ((SearchValue == 'l') || (SearchValue == 'lu') || (SearchValue == 'lud') || (SearchValue == 'ludo')) {
        Reset();
        document.getElementById("snakegame").style.display = 'none';
        document.getElementById("quizgame").style.display = 'none';
        document.getElementById("tennisgame").style.display = 'none';
        document.getElementById("tetrisgame").style.display = 'none';
        document.getElementById("pacman").style.display = 'none';
    }


    if (SearchValue == '') {
        Reset();
    }
}