const fs = require("fs");
const inquirer = require("inquirer");


function getUserInput() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter a GitHub username:",
                name: "username"
            }
        ])
        .then(answers => {
            
        });
}
