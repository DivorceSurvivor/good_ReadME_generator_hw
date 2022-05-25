const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Enter project title",
    name: "projectTitle"
  },
  {
    type: "input",
    message: "Enter project description",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation instructions",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage"
  },
  {
    type: "input",
    message: "Enter contriubtion guidelines",
    name: "contriubtion"
  },
  {
    type: "input",
    message: "Enter test instructions",
    name: "test"
  },
  {
    type: "list",
    message: "Select a license",
    name: "license",
    choices: ["ISC", "MIT", "GPLv2", "GPLv3"]
  },
  {
    type: "input",
    message: "Enter your github username",
    name: "username"
  },
  {
    type: "input",
    message: "Enter your email",
    name: "email"
  }
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile(
      `./${answers.projectTitle.replace(/ /g, "")}.README.md`,
      markdown
    );
  } catch (err) {
    console.log("Error in creating the README", err);
  }
}

init();
