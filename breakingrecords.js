function breakingRecords(scores) { 
    var lowscore = scores[0];
    var highscore = scores[0];
    var lowcount = 0;
    var highcount = 0; 
    for (var i = 0; i < scores.length; i++){
        if (scores[i] < lowscore) {
            lowscore = scores[i]
            lowcount++
        }
        else if (scores[i] > highscore) {
            highscore = scores[i]
            highcount++
        }
      }
    return [highcount, lowcount]
}
