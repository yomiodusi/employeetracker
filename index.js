// const express = require ('express');
const mysql = require ('mysql2');
const inquirer = require('inquirer');
const res = require('express/lib/response');

// Create connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nicole',
    database: 'emp_directory',
});

connection.connect((err) => {
    if(err){
        throw err;
    }
});

console.log ('Welcome to our Employee Tracker.')

//Prompt for user
function init() {
    inquirer
        .prompt({
            name: "options",
            type: "list",
            message: "What would you like to do?",
            pageSize: 10,
            choices: [
                "View All Departments",
                "View All Roles", 
                "View All Employees", 
                "Add a dept", 
                "Add a role", 
                "Add an Employee", 
                "Update an Employee Role",
                "Exit"
            ]
        })
        .then(function(response) {
            switch (response.options) {
                case "View All Departments":
                    viewDep();
                    break;

                case "View All Roles":
                    viewRole();
                    break;

                case "View All Employees":
                    viewEmp();
                    break;

                case "Add a dept":
                    addDept();
                    break;    

                case "Add a role":
                    addRole();
                    break;

                case "Add an Employee":
                    addEmp();
                    break;

                case "Update an Employee Role":
                    updEmp();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

init();

//Viewing All Departments
function viewDep() {
    connection.query(` SELECT * FROM emp_directory.department`, (err, res)=>{
         return console.table(res)
    })
    init();
}

//Viewing All Roles
function viewRole() {
    connection.query(` SELECT * FROM emp_directory.emp_role`, (err, res)=>{
        return console.table(res)
    })
    init();
}

//Viewing All Employees
function viewEmp() {
    connection.query(` SELECT * FROM emp_directory.employees`, (err, res)=>{
       return  console.table(res)
    })
    init();
}

//Add a Department
function addDept() {
    inquirer
        .prompt({
            name: "dept_name",
            type: "input",
            message: "What is the new department called?"
        }, )
        .then(function(response) {
            connection.query(`INSERT INTO department (dept_name) VALUES (?)`, [response.dept_name], (err, res)=>{
                return console.table(res)
            })
            init();
        })
}


//Add a Role
function addRole() {
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is this new title called?"
        }, {
            name: "salary",
            type: "input",
            message: "What is the salary for this new title?"
        }, {
            name: "dept_id",
            type: "input",
            message: "What is the dept id for this new title?"
        }, ])
        .then(function(response) {
            connection.query(`INSERT INTO emp_role (title,salary,dept_id) VALUES (?,?,?)`, [response.title, response.salary, response.dept_id], (err, res)=>{
                return console.table(res)
            })
            init();
        })
}


//Add an Employee
function addEmp() {
    inquirer
        .prompt([{
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
        }, {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
        }, {
            name: "role_id",
            type: "input",
            message: "What is the employee's role id?"
        }, {
            name: "manager_id",
            type: "input",
            message: "What is the employees manager's id?"
        }, ])
        .then(function(response) {
            connection.query(`INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`, [response.first_name, response.last_name, response.role_id, response.manager_id], (err, res)=>{
                return console.table(res)
            })
            init();
        })
}


// update employee
function updEmp() {
    connection.query(` SELECT * FROM emp_directory.employees`, (err, res)=>{
       
        inquirer
        .prompt([{
            name: "employees",
            type: "list",
            message: "Which employee would you like to update?",
            choices: res.map(e => e.id+ ': '+e.first_name+ ' '+e.last_name+' | Role Id:'+e.role_id)
        }, 
        {
            name: 'role_id',
            type: 'list',
            message: 'What new role id would you like to give the selected employee',
            choices: [1,2,3,4]
        }
    
    ]).then(function(response){
        console.log(response)
                const id = response['employees'].match(/^\d+/)
                connection.query(`UPDATE employees SET role_id = (?) WHERE id = (?)`,[response.role_id,id[0]], (err,res)=>{
                    return console.table(res)
                })
                
        })       
   })
    
        // .then(function(response) 
        //     connection.query(`INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`, [response.first_name, response.last_name, response.role_id, response.manager_id], (err, res)=>{
        //         return console.table(res)
        //     })
        //     init();
        // })
}