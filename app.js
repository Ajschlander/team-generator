const fs          = require("fs"),
      inquirer    = require("inquirer"),
      Manager     = require("./lib/manager.js"),
      Engineer    = require("./lib/engineer.js"),
      Intern      = require("./lib/intern.js"),
      team        = [];




const addManager = () => {
    inquirer
        .prompt([
            {
               type: "input",
               message: "What is your name?",
               name: "name" 
            },
            {
                type: "number",
                message: "What is your id number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "number",
                message: "What is your office number?",
                name: "officeNumber"
            },
        ])
        .then(answers => {

        });
}


function addTeamMember() {
    inquirer
        .prompt([
            
        ])
        .then(answers => {
            
        });
}

addTeamMember();
