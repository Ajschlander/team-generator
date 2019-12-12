const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(githubName){
        super();
        this.githubName = githubName;
    }

    getGithub(){

    }

    getRole(){
        return Engineer;
    }
}