class MySolution {
  countDownSum(num) {
    // Insert code here
    var sum = 0;
    for( var i = num ; i >= 0 ; i-- )
    {
      //document.write(i);
      sum += i;
      //document.write(sum);
    }
    document.write(sum, "<br />");
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
