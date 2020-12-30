function frequencyCounter(word) {
  // Insert code here;
 var letter_Count1 = 1;
 var letter_Count = 1;
 for (var position = 0; position < word.length; position++) 
 {
    if (word.charAt(position) == word.charAt(position+1)) 
      {
      letter_Count1 += 1;
      document.write(" ", word.charAt(position), " : ", letter_Count1, " ");
      }
      else if(word.charAt(position) != word.charAt(position+1)){
      letter_Count == 1;
      document.write(" ", word.charAt(position), " : ", letter_Count, " ");
      }
  }
  //document.write("<br />");
}

// Do not edit this line;
module.exports = frequencyCounter;
