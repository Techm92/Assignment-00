function fizzBuzz(start, end) {
  // Insert code here;
  for(var i = start; i <= end; i++){

    if (i % 3 == 0 && i % 5 == 0)
    {
      document.write("FizzBuzz");
    }

    else if (i % 3 == 0)
    {
      document.write("Fizz");
    }

    else if (i % 5 == 0)
    {
            document.write("Buzz");
    }

    else
       // output.push(i);
       document.write(i);
  }
  document.write("<br />");
}

// Do not edit this line;
module.exports = fizzBuzz;
