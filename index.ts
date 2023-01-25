class Employee {
    protected name: string;
    protected title: string;
    protected department: string;
    protected salary: number;

    constructor(empName: string, empTitle: string, empDepartment: string, empSalary: number) {
        this.name = empName;
        this.title = empTitle;
        this.department = empDepartment;
        this.salary = empSalary;
    }

    printSalary(): string {
        return `$${this.salary}`;
    }

    printDetails(): string {
        return `${this.name} is a ${this.title} in the ${this.department} department with a salary of ${this.printDetails}.`;
    }
}

class Manager extends Employee {
    teamSize: number;
    private readonly managerBonus: number = 1500;

    constructor(empName: string, empTitle: string, empDepartment: string, empSalary: number, manTeamSize: number, manBonus: number) {
        super(empName, empTitle, empDepartment, empSalary);
        this.teamSize = manTeamSize;
        this.managerBonus = manBonus;
    }

    printDetails(): string {
        return `${this.name} is a ${this.title} in the ${this.department} department with a salary of ${this.printDetails}. ${this.name} manages ${this.teamSize} employees.`;
    }
}

let jimbo: Employee = new Employee('Jimbo', 'Lifeguard', 'Aquatics', 30000);
let tammy: Manager = new Manager('Tammy', 'Aquatics Director', 'Aquatics', 50000, 7, 2000);

function printEmployee(callEmp: Employee) {
    console.log(callEmp.printDetails());
}

function printManager(callMan: Manager) {
    console.log(callMan.printDetails());
}

printEmployee(jimbo);
printManager(tammy);