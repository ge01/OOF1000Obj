// Declare JavaScript Objects as Variables
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};
console.log(car.wheels);

// Construct JavaScript Objects with Functions
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Make Instances of Objects with a Constructor Function
var myCar = new Car();
myCar.nickname = "Genie";
console.log(myCar.nickname);

// Make Unique Objects by Passing Parameters to our Constructor
var Car1 = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
var myCar1 = new Car1(3,2,1);
console.log(myCar1.seats);

// Make Object Properties Private
var Car2 = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};
// Make an Instance of the Car Constructor
var myCar = new Car2(1);

// Iterate over Arrays with map
var oldArray = [1,2,3,4,5];
var newArray = oldArray.map(function(val){
  return val + 3;
});
console.log(newArray);

// Condense arrays with reduce
var array = [4,5,6,7,8];
var singleVal = 0;
singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
}, 0);
console.log(singleVal);

// Filter Arrays with filter
var oldArray1 = [1,2,3,4,5,6,7,8,9,10];
var newArray1 = oldArray.filter(function(val){
  return val < 6;
});
console.log(newArray1);

// Sort Arrays with sort
// Use sort to sort array from largest to smallest.
var array5 = [1, 12, 21, 2];
array5.sort(function(a,b){
  return b -a;
});
console.log(array5);

// Reverse a String
var array = [1,2,3,4,5,6,7];
var newArray = [];
newArray = array.reverse();
console.log(newArray);

// Concatenate Arrays with concat
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);
console.log(newArray);

// Split Strings with split
var string = "Split me into an array";
var array = [];
array = string.split(" ");
console.log(array);

// Join Strings with join
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = joinMe.join(" ");
console.log(joinedString);
