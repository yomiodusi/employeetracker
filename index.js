// const express = require ('express');
const mysql = require ('mysql2');
const inquirer = require('inquirer');

// Create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nicole',
    database: 'employeetracker',
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log(' My Sql Connected...');
});

const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
