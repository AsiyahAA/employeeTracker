const inquirer = require("inquirer");
const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection(
    {
    host: 'localhost',
      // MySQL username,
    user: 'root',
      // MySQL password
    password: 'password',
    database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)

);


function startApp() {
    inquirer.prompt([
        {
        type: "list",
        name: "start",
        message: "Choose from the following options",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        },
    ])
    .then((answers) => {
        if (answers.start == "View all departments") {
            return viewDept();
        } else if (answers.start == "View all roles") {
            return viewRole();
        } else if (answers.start == "View all employees") {
            return viewEmp();
        } else if (answers.start == "Add a department") {
            return addDept();
        } else if (answers.start == "Add a role") {
            return addRole();
        } else if (answers.start == "Add an employee") {
            return addEmp();
        } else if (answers.start == "Update an employee role") {
            return addUpdate();
        }    
    
    })
}


function viewDept() {

    db.query('SELECT * FROM departments', function (err, results) {
        
        console.table(results);

        startApp();
    });

}

function viewRole() {

    db.query('SELECT roles.title, roles.salary, departments.department_name FROM roles JOIN departments ON roles.department_id = departments.id', function (err, results) {
        
        console.table(results);

        startApp();
    });
    
}

function viewEmp() {

    db.query('SELECT * FROM employees', function (err, results) {
    
        console.table(results);

        startApp();
    });
    
}

function addDept() {
    inquirer.prompt([
        {
        type: "input",
        name: "deptName",
        message: "What is the name of the department you would like to add?",
        },

    ])
    .then((answers) => {
        console.log(answers)

        db.query(`INSERT INTO departments (department_name) VALUES ("${answers.deptName}")`, function (err, results) {
            
            console.table(results);
    
            startApp();
        });
        
    })
}

function addRole() {
    inquirer.prompt([
        {
        type: "input",
        name: "roleName",
        message: "What is the name of the role you would like to add?",
        },
        {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of this role?",
        },
        {
        type: "input",
        name: "roleDept",
        message: "What is the department id of this role?",
        },      
        
    ])
    .then((answers) => {
        console.log(answers)

        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${answers.roleName}", ${answers.roleSalary}, ${answers.roleDept})`, function (err, results) {

            console.table(results);
        
    startApp();
    })
})
    
}

function addEmp() {
    inquirer.prompt([
        {
        type: "input",
        name: "employeeFirst",
        message: "What is the first name of the employee?",
        },
        {
        type: "input",
        name: "employeeLast",
        message: "What is the last name of the employee?",
        },
        {
        type: "input",
        name: "employeeRole",
        message: "What is the role id of this employee?",
        },      
    ])
    .then((answers) => {
        console.log(answers)

        db.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ("${answers.employeeFirst}", "${answers.employeeLast}", ${answers.employeeRole})`, function (err, results) {
            if(err){
                console.log(err)
            }
        })
        startApp()
})
}

function addUpdate() {
    inquirer.prompt([
        {
        type: "input",
        name: "empName",
        message: "Which employee would you like to update?",
        },
    ])
    .then((answers) => {
        console.log(answers)

        db.query(`UPDATE employees SET employees.role_id = <${answers.empName}> WHERE employees.id = ${answers.id}`)
        
    startApp();
    })    
}

startApp();

