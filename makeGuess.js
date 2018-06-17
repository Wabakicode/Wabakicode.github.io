function makeGuessF(){
	var listItems = document.getElementById("letters").querySelectorAll("a");
	var guessedLetter;
	for (var i = 0, len = listItems.length; i < len; i++) {
		
	  listItems[i].onclick= function() {
			guessedLetter = this.getAttributeNode("value").value;
			document.getElementById("test").innerHTML=this.getAttributeNode("value").value;
			var idxarr=[];
	var word=document.getElementById("theword").getAttributeNode("innerHTML").value;;
	for(var i=0, len=word.length;i<len;i++){
		if(word[i]===guessedLetter){
			idxarr.push(i);
		}
	}
	var actualword=document.getElementById("guesstheword").getAttributeNode("innerHTML").value;;
	for(var i=0,len=idxarr.length;i<len;i++){
		actualword[idxarr[i]]=guessedLetter;
	}
	document.getElementById("guesstheword").innerHTML=actualword;
		};
	};
};
