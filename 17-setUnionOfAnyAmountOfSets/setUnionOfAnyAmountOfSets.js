function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var newSet = [];

  for (var i = 0; i < arguments.length; i++) {
    if( arguments[i] != arguments[i+1] )
    {
      document.write(arguments[i]);
      newSet = newSet.concat(arguments[i]);
    }
  }
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
