function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var product = args[0];

  for (var i = 1; i < args.length; i++){
    //document.write(args[i],"<br />");
    //document.write(product,"<br />");
    product *= args[i];
    //document.write(product,"<br />");
  }
    document.write(product,"<br />");
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
