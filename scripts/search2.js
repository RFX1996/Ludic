var DinoKeywords = ["d", "di", "din", "dino"];
var SpiderKeywords = ["s", "sp", "spi", "spid", "spider"];
var DuckKeywords = ["d", "du", "duc", "duck"];
var BallKeywords = ["b", "ba", "ball", "ball p"];
var ParkingKeywords = ["p", "pa", "par", "park", "parki", "parkin", "parking"];
var BirdKeywords = ["b", "bi", "bir", "bird", "bird s"];



//didn't used these varaible as we get a error if just use these
var DinoCard = document.getElementById("dino");
var SpiderCard = document.getElementById("spider");
var DuckCard = document.getElementById("duck");
var BallCard = document.getElementById("ball");
var ParkingCard = document.getElementById("parking");
var BirdCard = document.getElementById("bird");


var itsDino = false;
var itsSpider = false;
var itsDuck = false;
var itsBall = false;
var itsParking = false;
var itsBird = false;




//document.getElementById("searchbar").addEventListener("change", Search());
//document.getElementById("searchbar").addEventListener("click", Search());



function Reset() {
    document.getElementById("dino").style.display = 'block';
    document.getElementById("spider").style.display = 'block';
    document.getElementById("duck").style.display = 'block';
    document.getElementById("ball").style.display = 'block';
    document.getElementById("parking").style.display = 'block';
    document.getElementById("bird").style.display = 'block';





};


function Search() {

    let SearchValue = document.getElementById("searchbar").value;
    SearchValue = SearchValue.toLowerCase();
    Reset();


    if (DinoKeywords.includes(SearchValue) == true) {
        itsTennis = true;
    }

    if (DuckKeywords.includes(SearchValue) == true) {
        itsLudo = true;
    }

    if (SpiderKeywords.includes(SearchValue) == true) {
        itsSnake = true;
    }

    if (BallKeywords.includes(SearchValue) == true) {
        itsTetris = true;
    }

    if (ParkingKeywords.includes(SearchValue) == true) {
        itsQuiz = true;
    }

    if (BirdKeywords.includes(SearchValue) == true) {
        itsQuiz = true;
    }





    //this statement for the case if entered value  does not match

    if (DinoKeywords.includes(SearchValue) == false) {
        if (SpiderKeywords.includes(SearchValue) == false) {
            if (DuckKeywords.includes(SearchValue) == false) {
                if (BallKeywords.includes(SearchValue) == false) {
                    if (ParkingKeywords.includes(SearchValue) == false) {
                        if (BirdKeywords.includes(SearchValue) == false) {
                            document.getElementById("dino").style.display = 'none';
                            document.getElementById("spider").style.display = 'none';
                            document.getElementById("duck").style.display = 'none';
                            document.getElementById("ball").style.display = 'none';
                            document.getElementById("parking").style.display = 'none';
                            document.getElementById("bird").style.display = 'none';
                        }
                    }
                }
            }
        }
    }




    if (itsDino == true) {
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
        itsDino = false;
    }

    if (itsSpider == true) {
        document.getElementById("dino").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
        itsSpider = false;
    }

    if (itsDuck == true) {
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
        itsDuck = false;
    }

    if (itsBall == true) {
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
        itsBall = false;
    }

    if (itsParking == true) {
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
        itsParking = false;
    }

    if (itsBird == true) {
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        itsBird = false;
    }




    //Using this statement as we have t and te in two of the games name
    if ((SearchValue == 'd') || (SearchValue == 'di') || (SearchValue == 'din') || (SearchValue == 'dino')) {
        Reset();
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
    }

    if ((SearchValue == 's') || (SearchValue == 'sp') || (SearchValue == 'spid') || (SearchValue == 'spide') || (SearchValue == 'spider')) {
        Reset();
        document.getElementById("dino").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';

    }


    if ((SearchValue == 'd') || (SearchValue == 'du') || (SearchValue == 'duc') || (SearchValue == 'duck')) {
        Reset();
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';

    }

    if ((SearchValue == 'b') || (SearchValue == 'ba') || (SearchValue == 'bal') || (SearchValue == 'ball')) {
        Reset();
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
    }

    if ((SearchValue == 'p') || (SearchValue == 'pa') || (SearchValue == 'par') || (SearchValue == 'park') || (SearchValue == 'parki') || (SearchValue == 'parkin') || (SearchValue == 'parking')) {
        Reset();
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("bird").style.display = 'none';
    }

    if ((SearchValue == 'b') || (SearchValue == 'bi') || (SearchValue == 'bir') || (SearchValue == 'bird')) {
        Reset();
        document.getElementById("dino").style.display = 'none';
        document.getElementById("spider").style.display = 'none';
        document.getElementById("duck").style.display = 'none';
        document.getElementById("ball").style.display = 'none';
        document.getElementById("parking").style.display = 'none';
    }


    if (SearchValue == '') {
        Reset();
    }
}