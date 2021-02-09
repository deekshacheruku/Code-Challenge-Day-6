// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


// Write the function to find the findDigit obtained.
var findDigit = function(num, nth){
     //your code here
     if(nth < 0)
      return -1
    if(num < 0)
      num=-num
     var c=1
     while (num != 0){
       var d= num%10
       if (c == nth)
        return d
      c=c+1
      num=parseInt(num/10)
     }
     return 0
  }

//Use SpecRunner to check the Test Cases.