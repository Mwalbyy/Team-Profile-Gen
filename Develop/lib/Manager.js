const Employee = require("./Employee");

class Manager extends Employee {

  // YOUR CODE HERE
    constructor(name, id, email, managerOfficeNumber) {
    super(name, id, email)
    this.managerOfficeNumber = managerOfficeNumber
    
  }

  getRole() {
    // YOUR CODE HERE
    return 'Manager'
  }

  getOfficeNumber() {
    // YOUR CODE HERE
    return this.managerOfficeNumber
  }

}

module.exports = Manager;
