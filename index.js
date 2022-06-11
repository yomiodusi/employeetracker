// const express = require ('express');
const mysql = require ('mysql2');
const inquirer = require('inquirer');

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
            choices: [
                "View All Departments",
                "View All Roles", 
                "View All Employees", 
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

                case "Add a role":
                    addRole();
                    break;

                case "Add an Employee":
                    addEmp();
                    break;

                case "Update Employee Role":
                    updEmp();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

init();