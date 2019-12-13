const fs          = require("fs"),
      inquirer    = require("inquirer"),
      Manager     = require("./lib/manager.js"),
      Engineer    = require("./lib/engineer.js"),
      Intern      = require("./lib/intern.js"),
      team        = [];

let htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="header">
        <h1>My Team</h1>
    </div>

    <div class="card-container">
        
`

const endHTML = `
</body>
</html>
`

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
            }
        ])
        .then(answers => {
            const managerName           = answers.name,
                  managerID             = answers.id,
                  managerEmail          = answers.email,
                  managerOfficeNumber   = answers.officeNumber;

            const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
            team.push(manager);
            addTeamMember();
        });
}

const addEngineer = () => {
    inquirer
        .prompt([{
                type: "input",
                message: "What is the engineer's name?",
                name: "name"
            },
            {
                type: "number",
                message: "What is the engineer's id number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's github name?",
                name: "githubName"
            }
        ])
        .then(answers => {
            const engineerName        = answers.name,
                  engineerID          = answers.id,
                  engineerEmail       = answers.email,
                  engineerGithubName  = answers.githubName;

            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithubName);
            team.push(engineer);
            confirmAddMember();
        });
}

const addIntern = () => {
    inquirer
        .prompt([{
                type: "input",
                message: "What is the intern's name?",
                name: "name"
            },
            {
                type: "number",
                message: "What is the intern's id number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What school is the intern attending?",
                name: "school"
            }
        ])
        .then(answers => {
            const internName      = answers.name,
                  internID        = answers.id,
                  internEmail     = answers.email,
                  internSchool    = answers.school;
            
            const intern = new Intern(internName, internID, internEmail, internSchool);
            team.push(intern);
            confirmAddMember();
        });
}

const generateHTML = async () => {
    team.forEach(member => {
        if(member.role === "Manager"){
            const newCard = `
            <div class="card">
                <div class="top">
                    <h1>${ member.name }</h1>
                    <h2>${ member.role }</h2>
                </div>
                <div class="info-container">
                    <p class="info">ID: ${ member.id }</p> 
                    <p class="info">Email: ${ member.email }</p>
                    <p class="info">ID: ${ member.officeNumber }</p>       
                </div>
                </div>`
                htmlTemplate += newCard;
        }else if(member.role === "Engineer"){
            const newCard = `
            <div class="card">
                <div class="top">
                    <h1>${ member.name }</h1>
                    <h2>${ member.role }</h2>
                </div>
                <div class="info-container">
                    <p class="info">ID: ${ member.id }</p> 
                    <p class="info">Email: ${ member.email }</p>
                    <p class="info">ID: ${ member.githubName }</p>       
                </div>
                </div>`
            htmlTemplate += newCard;
        }
        else {
            const newCard = `
            <div class="card">
                <div class="top">
                    <h1>${ member.name }</h1>
                    <h2>${ member.role }</h2>
                </div>
                <div class="info-container">
                    <p class="info">ID: ${ member.id }</p> 
                    <p class="info">Email: ${ member.email }</p>
                    <p class="info">ID: ${ member.school }</p>       
                </div>
                </div>`
            htmlTemplate += newCard;
        }
    });
    
    htmlTemplate += endHTML;

    fs.writeFile("output/index.html", htmlTemplate, err => {
        if(err) throw err;
        console.log("Done!");
    })
}

const confirmAddMember = () => {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to add another team member?",
                name: "confirmAdd"
            }
        ])
        .then(answer => {
            if(answer.confirmAdd === true){
                addTeamMember();
            }
            else{
                // done
                console.log(team);
                generateHTML();
            }
        });
}

const addTeamMember = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern"
                ],
                name: "memberType"
            }    
        ])
        .then(answers => {
            const newMemberType = answers.memberType;
            if(newMemberType === "Engineer"){
                addEngineer();
            }
            else{
                addIntern();
            }
        });
}

addManager();