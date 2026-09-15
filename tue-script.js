const masterBrain = {
  level: 1,
  logInit: function () {
    console.log("Master Brain initialized");
  },
};

masterBrain.logLevel = function () {
  console.log(`Master brain level: ${masterBrain.level}`);
};

function greet() {
  console.log("Master Brain says hello");
}

masterBrain.logGreet = greet;
masterBrain.logInit();
masterBrain.logLevel();
masterBrain.logGreet();

function levelUp(brain) {
  brain.level++;
}

levelUp(masterBrain);
masterBrain.logLevel();

function repeat(count, action) {
  for (let i = 1; i <= count; i++) {
    console.log(`Attempt ${i}`);
    action();
  }
}

repeat(5, function () {
  console.log("Doing something...");
});

repeat(3, masterBrain.logInit);

function makeUpgrader(amount) {
  return function (brain) {
    brain.level += amount;
  };
}

const bigUpgrade = makeUpgrader(10);
bigUpgrade(masterBrain);
masterBrain.logLevel();

const littleUpgrade = makeUpgrader(1);
littleUpgrade(masterBrain);
masterBrain.logLevel();
