function countOfAllBooleans(arr) {
  // Insert code here;
var boolCount = 0;

for (var i = 0; i < arr.length; i++)
{
    if (arr[i] === true || arr[i] === false)
    {
        boolCount = boolCount + 1;
    }
}
 document.write(boolCount);
}

// Do not edit this line;
module.exports = countOfAllBooleans;
