
const inquirer = require("inquirer")
const fs = require("fs");
const Choice = require("inquirer/lib/objects/choice");
const renderLicenseSection = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    "what is the title?",
    "Give a description of the project",
    "enter installation instructions, if any",
    "enter how to use the application",
    "if available, give instructions on how to contribute",
    "enter test instructions"
];

function init() {
    inquirer.prompt(
    [
        {
            type: "input",
            message: "what is the title?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a description of the project",
            name: "decription"
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
            type: 'checkbox',
            message: "what licenses are needed",
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
        }


    ]
)
    .then((answers) => {
       fs.writeFileSync('./README1.md', 
       `${generateMarkdown(answers)}`, err => {
           if(err) {
               console.log(err)
               return
           }
       })
    })
.catch((err) => {
    console.log(err)
})
}
 


// Function call to initialize app
init();
