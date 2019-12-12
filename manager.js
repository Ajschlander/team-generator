const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, title);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return Manager;
    }
}
