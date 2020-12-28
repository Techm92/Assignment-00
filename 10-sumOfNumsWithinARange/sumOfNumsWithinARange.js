function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var rangeCount = 0;

  for(var i = 0; i < nums.length; i++)
  {
    if(nums[i] >= start && nums[i] <= end)
    {
      rangeCount += 1;
    }

  }
  document.write(rangeCount);
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
