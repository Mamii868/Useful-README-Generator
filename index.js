
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        message: "what is the title?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "enter installation instructions, if any",
        name: "instructions"
    },
    {
        type: "input",
        message: "enter how to use the application",
        name: "howToUse"
    },
    {
        type: "input",
        message: "if available, give instructions on how to contribute",
        name: "contributions"
    },
    {
        type: "input",
        message: "enter test instructions",
        name: "test"
    },
    {
        type: 'list',
        message: "what license is needed",
        name: "license",
        choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "enter your Github username",
        name: "user"
    },
    {
        type: "input",
        message: "enter your email",
        name: "email"
    },
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const info = generateMarkdown(answers)
        createFile(info)
})
    
.catch((err) => {
    console.log(err)
})
}
 
function createFile(info) {
    fs.writeFileSync('./README.md', 
    info, err => {
        if(err) {
            console.log(err)
            return
        }else{
            console.log("created File")
            return
        }
})};


// Function call to initialize app
init();
