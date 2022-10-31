// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    var sum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      var currentNumber = arr[i];
      sum += currentNumber;
    }
  
    return sum;
  };