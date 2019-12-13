const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Manager;
