const { program } = require("commander");

program
  .command("add")
  .description("Add two numbers `add --num1 value --num2 value`")
  .requiredOption("--num1 <number>", "First number in operation")
  .requiredOption("--num2 <number>", "Second number in operation")
  .action((options) => {
    console.log(parseFloat(options.num1) + parseFloat(options.num2));
  });

program
  .command("substract")
  .description("Substract two numbers `substract --num1 value --num2 value`")
  .requiredOption("--num1 <number>", "First number in operation")
  .requiredOption("--num2 <number>", "Second number in operation")
  .action((options) => {
    console.log(parseFloat(options.num1) - parseFloat(options.num2));
  });

program
  .command("mult")
  .description("Multiply two numbers `mult --num1 value --num2 value`")
  .requiredOption("--num1 <number>", "First number in operation")
  .requiredOption("--num2 <number>", "Second number in operation")
  .action((options) => {
    console.log(parseFloat(options.num1) * parseFloat(options.num2));
  });

program
  .command("div")
  .description("Divide two numbers `div --num1 value --num2 value`")
  .requiredOption("--num1 <number>", "First number in operation")
  .requiredOption("--num2 <number>", "Second number in operation(Denominador)")
  .action((options) => {
    if (parseFloat(options.num2) === 0) {
      console.log("Denominator cant be zero");
      return;
    }
    console.log(parseFloat(options.num1) / parseFloat(options.num2));
  });

program.parse(process.argv);
