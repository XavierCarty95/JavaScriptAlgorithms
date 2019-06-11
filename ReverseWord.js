function reverseWord(string){
  //turn string into array
  // reverseWord
  var wordsArr = string.split(' ')
  var reverseWords = [];
  
  wordsArr.forEach(word => {
    var reverseWord = '';
     for(var i = word.length - 1; i >= 0; i--){
      reverseWord += word[i];
    }
    reverseWords.push(reverseWord);
  })
  return reverseWords.join(' ')
}

reverseWord('Xavier is the best')
