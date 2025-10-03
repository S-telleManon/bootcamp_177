import chalk from "chalk";

export function showColors() {
  console.log(chalk.red("Hello I'm Red"));
  console.log(chalk.green("This is green text!"));

  const message = "Welcome to the colorful world! 🌈";
  console.log(chalk.bold.red(message));
  console.log(chalk.green.bgBlue("I love swimming"));
}