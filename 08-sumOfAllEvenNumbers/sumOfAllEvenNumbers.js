function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var evenCount= 0;

  for( var i =0; i < nums.length; i++)
  {
    if(nums[i] % 2 == 0)
    {
      evenCount += 1;
    }
  }
  document.write(evenCount);
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
