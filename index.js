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
    console.log(' My Sql Connected...');
});
