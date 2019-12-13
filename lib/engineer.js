const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(githubName){
        super();
        this.githubName = githubName;
        this.role = "Engineer";
    }

    getGithub(){
        return this.githubName;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Engineer;