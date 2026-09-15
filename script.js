function double(number) {
  return number * 2;
}

const myNumber = 4;
const myString = "John";

console.log(typeof double);

double = function (number) {
  return number + number;
};

double(5);

const myArray = [1, 2, 3];
console.log([4, 5, 6]);

const myFunction = function () {
  cosole.log("Anonymous function");
};

const dog = {
  name: "Sparky",
  age: 4,
  whine: function () {
    console.log("Whine");
  },
};

dog.bark = function () {
  console.log(this.name + " woofs. ");
};

dog.bark();
dog.whine();

const dog2 = {
  name: "Willy",
  age: 2,
  bark: function () {
    console.log(this.name + " woofs. ");
  },
};

dog2.bark();

function showScore(score) {
  console.log("Score: " + score);
}

function showStartingScore(func) {
  func(0);
}

showStartingScore(showScore);

function message1() {
  console.log("First is the worst. ");
}

function message2() {
  console.log("Second is the best. ");
}

function constructMessage(f1, f2) {
  f1();
  f2();
}

constructMessage(message1, message2);
