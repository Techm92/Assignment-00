function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
    var numCount = 0;

    for(var i = 0; i < nums.length; i++)
    {
      if( nums[i] < target)
      {
        numCount += 1;
      }

    }
    document.write(numCount);
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
