


var userName = prompt("Tell Me Your Name..??");

var fChar = userName.slice(0,1).toUpperCase();
var otherChar = userName.slice(1).toLowerCase();
var fullName = fChar+otherChar;
document.getElementById('userName').innerHTML = fullName;

var things = ['Rock', 'Paper', 'Scissor']
var i = 1;
var randomThing;
var counter;

function random(){
    if(i<3){
        i++;
    }else if(i=3){
        i =1;
    }
	counter = i;
    randomThing = things[counter-1] ;
    display.innerHTML = randomThing;
    run();
}
function run(){
    setTime = setTimeout(random, 100)
	
}
random()

function gameContinue(){
		userDisplay.innerHTML = "Your Defender";
		result.className = "result-hidden";
		run();
		
}

function playAgain(){

}



var flag = true;

var userPoints = document.getElementById('userPoints');
var pcPoints = document.getElementById('pcPoints');
var resultRemarks = document.getElementById('result').childNodes[1];
var continueBtn = document.getElementById('btn');
var result = document.getElementById('result');
userCounter = 0;
pcCounter = 0;

if(flag == true){
	result.className = "result-hidden";
	function myFunction(userInput){
			userDisplay.innerHTML = userInput;
			clearTimeout(setTime);
			if(userInput == 'Rock' && randomThing == 'Paper' ){
				resultRemarks.innerHTML = 'Your Rock coverd By Paper.. <br> <h2> You Lost...</h2>';
				pcCounter++;
				
			}else if(userInput == 'Paper' && randomThing == 'Rock' ){
				resultRemarks.innerHTML = 'Rock coverd By Your Paper.. <br> <h2> You Won...</h2';
				userCounter++;
				
			}else if(userInput == 'Paper' && randomThing == 'Scissor' ){
				resultRemarks.innerHTML = 'Your Paper Cut By Scissor.. <br> <h2> You Lost...</h2>';
				pcCounter++;
				
			}else if(userInput == 'Scissor' && randomThing == 'Paper' ){
				resultRemarks.innerHTML = 'Paper Cut By Your Scissor.. <br> <h2> You Won...</h2>';
				userCounter++;
				
			}else if(userInput == 'Scissor' && randomThing == 'Rock' ){
				resultRemarks.innerHTML = 'Rock Destroy Your Scissor.. <br> <h2> You Lost...</h2>';
				pcCounter++;
				
			}else if(userInput == 'Rock' && randomThing == 'Scissor' ){
				resultRemarks.innerHTML = 'Your Rock Destroy The Scissor.. <br> <h2> You Won...</h2>';
				userCounter++;
				
			}else{
				resultRemarks.innerHTML = 'Match Tie...';
			}
			userPoints.innerHTML = userCounter;
			pcPoints.innerHTML = pcCounter;
			flag = false;
		
		if(flag == false){
		
			if(pcCounter >= 3){
				document.getElementById('result-board').childNodes[1].innerHTML = "<p><h1>You Lost...</h1> <br> <h2><a href='index.html'>Play Again</a></h2></p>";
				document.getElementById('result-board').className = "result-show";
			}else if(userCounter >= 3){
				document.getElementById('result-board').childNodes[1].innerHTML = "<p><h1>Congratulations " + fullName + "! <br>You Are Winner... </h1><br> <h2><a href='index.html'>Play Again</a></h2></p>";
				document.getElementById('result-board').className = "result-show";
			}else{
				result.className = "result-show";
			}
		}
	}
}


