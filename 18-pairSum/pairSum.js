function pairSum(nums, target) {
  // Insert code here;
    var intLeft = 0,
        arrIntegersLength = nums.length;
        intRight = arrIntegersLength - 1,
        //arrReturn = [];

    nums.sort();

    while (intLeft < intRight) {
        var currentSum = nums[intLeft] + nums[intRight];
        if (currentSum === target) {
          return true;
            //arrReturn.push(nums[intLeft] + " + " + nums[intRight]);
            intLeft += 1;
        } else if ( currentSum < target) {
            intLeft += 1;
        } else {
            intRight -= 1;
        }
    }
    return false;
}

// Do not edit this line;
module.exports = pairSum;
