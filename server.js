const inquirer = require("inquirer");
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        } else if (answers.add == "View all employees") {
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
//connect to schema.sql and seeds.sql
function viewDept() {

    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
        console.table(results);

        startApp();
      });

}
//connect to schema.sql and seeds.sql
function viewRole() {

    db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
        console.log(results);

        startApp();
      });
    
}
//connect to schema.sql and seeds.sql
function viewEmp() {

    db.query('SELECT * FROM employees', function (err, results) {
        console.log(results);
        console.table(results)

        startApp();
      });
    
}
//connect to schema.sql and seeds.sql
function addDept() {
        
    startApp();
}
//connect to schema.sql and seeds.sql
function addRole() {
    
    startApp();
}
//connect to schema.sql and seeds.sql
function addEmp() {
        
    startApp();
}
//connect to schema.sql and seeds.sql
function addUpdate() {
            
    startApp();
}
startApp();

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  