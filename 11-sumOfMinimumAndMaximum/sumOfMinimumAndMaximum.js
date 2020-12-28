function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var minElmnt = 0;
  var maxElmnt = 0;
  var min_maxSum = 0;

  minElmnt = nums[0];
  
   for(var i = 1; i  < nums.length ; i++)
   {
     if( nums[i] < minElmnt)
     {
       minElmnt = nums[i];
     }

     else if ( nums[i] > maxElmnt) 
     {
       maxElmnt = nums[i];
     }

    min_maxSum = minElmnt + maxElmnt;
   }
  document.write(min_maxSum);
  document.write("<br />");
  document.write("<br />");
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
