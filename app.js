const fs = require("fs");
const inquirer = require("inquirer");


function getUserInput() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter a GitHub username:",
                name: "username"
            },
            {
                type: "input",
                message: "Enter a color:",
                name: "color"
            }
        ])
        .then(answers => {
            const username = answers.username;
            const colorPicked = answers.color;
            getGitHubInfo(username, colorPicked);
        });
}
