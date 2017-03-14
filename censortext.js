var censoredWords = ["suck","fuck","pervert"];
var customCensored = [];
function censor(inStr){
	for (idx in censoredWords){
		inStr.replace(censoredWords[idx],"******");
	}
	for (idx in customCensored){
		inStr.replace(customCensored[idx],"******");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensored.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensored);
}

export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getCensoredWords = getCensoredWords;