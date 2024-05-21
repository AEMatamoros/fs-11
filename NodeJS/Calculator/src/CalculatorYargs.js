const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Add two numbers `add --num1=value --num2=value`",
    builder: {
      num1: {
        describe: "--num1 <number> First number in operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "--num2 <number> Second number in operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (arg) => {
      console.log(arg.num1 + arg.num2);
    },
  })
  .command({
    command: "sub",
    describe: "Add two numbers `sub --num1=value --num2=value`",
    builder: {
      num1: {
        describe: "--num1 <number> First number in operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "--num2 <number> Second number in operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (arg) => {
      console.log(arg.num1 - arg.num2);
    },
  })
  .command({
    command: "mult",
    describe: "mult two numbers `mult --num1=value --num2=value`",
    builder: {
      num1: {
        describe: "--num1 <number> First number in operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "--num2 <number> Second number in operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (arg) => {
      console.log(arg.num1 * arg.num2);
    },
  })
  .command({
    command: "div",
    describe: "div two numbers `div --num1=value --num2=value`",
    builder: {
      num1: {
        describe: "--num1 <number> First number in operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "--num2 <number> Second number in operation(Denominator)",
        demandOption: true,
        type: "number",
      },
    },
    handler: (arg) => {
      if (parseFloat(arg.num2) === 0) {
        console.log("You can't divide by zero");
        return;
      }
      console.log(arg.num1 / arg.num2);
    },
  })
  .help().argv;
