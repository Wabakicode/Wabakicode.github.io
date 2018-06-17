function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function makeGuessF(){
	
	
    var c = document.getElementById("display");
    var ctx = c.getContext("2d");
    ctx.font="30px Arial";
	
	var listItems = document.getElementById("letters").querySelectorAll("a");
	var guessedLetter;
	for (var i = 0, len = listItems.length; i < len; i++) {
	  listItems[i].onclick= function() {
		  
			guessedLetter = this.getAttributeNode("value").value;
			
			var lives = document.getElementById("lives").innerHTML;
			var actualWord = document.getElementById("theword").innerHTML;
			var idxArr = [];
			
			for(var j = 0,wLen = actualWord.length ; j<wLen ; j++){
				if(actualWord[j] == guessedLetter) idxArr.push(j);
			};
			if(idxArr.length == 0){
				if(lives != 0) 
				{
					lives = lives - 1;
					switch(lives)
					{
						case 10: {
							ctx.moveTo(200, 300);
							ctx.lineTo(200, 100);
							ctx.stroke();
						} break;
						case 9: {
							ctx.moveTo(200, 275);
							ctx.lineTo(225, 300);
							ctx.stroke();
						} break;
						case 8: {
							ctx.moveTo(200, 100);
							ctx.lineTo(325, 100);
							ctx.stroke();
						} break;
						case 7: {
							ctx.moveTo(200, 125);
							ctx.lineTo(225, 100);
							ctx.stroke();
						} break;
						case 6: {
							ctx.moveTo(325, 100);
							ctx.lineTo(325, 130);
							ctx.stroke();
						} break;
						case 5: {
							ctx.beginPath();
							ctx.arc(325,150,20,0,2*Math.PI);
							ctx.closePath();
							ctx.stroke();
						} break;
						case 4: {
							ctx.moveTo(325, 170);
							ctx.lineTo(325, 230);
							ctx.stroke();
						} break;
						case 3: {
							ctx.moveTo(325, 180);
							ctx.lineTo(300, 215);
							ctx.stroke();
						} break;
						case 2: {
							ctx.moveTo(325, 180);
							ctx.lineTo(350, 215);
							ctx.stroke();
						} break;
						case 1: {
							ctx.moveTo(325, 230);
							ctx.lineTo(300, 265);
							ctx.stroke();
						} break;
						case 0: {
							ctx.moveTo(325, 230);
							ctx.lineTo(350, 265);
							ctx.stroke();
						} break;
					}
					document.getElementById("lives").innerHTML = lives;
				}
				if(lives == 0) 
				{
					document.getElementById("msg").innerHTML = "The word was : "+document.getElementById("theword").innerHTML;
					document.getElementById("letters").style.display = "none";
					document.getElementById("lives").innerHTML = "YOU LOSE";
				};
				
			}
			var wordToGuess = document.getElementById("guesstheword").innerHTML;
			
			for(var k = 0, arrLen = idxArr.length ; k<arrLen ; k++){
				wordToGuess = setCharAt(wordToGuess,idxArr[k],guessedLetter);
			};
			document.getElementById("guesstheword").innerHTML = wordToGuess;
			this.style.display = "none";
			if(document.getElementById("guesstheword").innerHTML == document.getElementById("theword").innerHTML){
				document.getElementById("msg").style.display = "none";
				document.getElementById("letters").style.display = "none";
				document.getElementById("lives").innerHTML = "YOU WIN !";
			};
		};
	};
};