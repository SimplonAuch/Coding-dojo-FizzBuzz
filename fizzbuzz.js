// 1,2,3 codez ! //
var App = {
  fizzBuzz: function(number){
    if(number%15 == 0){
     return "FizzBuzz";
    }else if(number%3 == 0){
      return "Fizz";
    }else if(number%5 == 0){
      return "Buzz";
    }
    return number;
  }
}


module.exports = App;
