"use strict";
class Employee {
    constructor(empName, empTitle, empDepartment, empSalary) {
        this.name = empName;
        this.title = empTitle;
        this.department = empDepartment;
        this.salary = empSalary;
    }
    printSalary() {
        return `$${this.salary}`;
    }
    printDetails() {
        return `${this.name} is a ${this.title} in the ${this.department} department with a salary of ${this.printDetails}.`;
    }
}
class Manager extends Employee {
    constructor(empName, empTitle, empDepartment, empSalary, manTeamSize, manBonus) {
        super(empName, empTitle, empDepartment, empSalary);
        this.managerBonus = 1500;
        this.teamSize = manTeamSize;
        this.managerBonus = manBonus;
    }
    printDetails() {
        let result = super.printDetails();
        return result + `${this.name} manages ${this.teamSize} employees.`;
    }
}
let jimbo = new Employee('Jimbo', 'Lifeguard', 'Aquatics', 30000);
let tammy = new Manager('Tammy', 'Aquatics Director', 'Aquatics', 50000, 7, 2000);
function printEmployee(callEmp) {
    console.log(callEmp.printDetails());
}
function printManager(callMan) {
    console.log(callMan.printDetails());
}
printEmployee(jimbo);
printManager(tammy);
