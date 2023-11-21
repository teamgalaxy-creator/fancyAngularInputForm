// simple express server on port 4201
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    database: 'fancyform',
    user:'root',
    password:'root',
 
});



db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to database');

    db.query('CREATE DATABASE IF NOT EXISTS fancyform', (err, result) => {
        if(err){
            throw err;
        }
        console.log('Database created');
    })

    db.query('CREATE TABLE IF NOT EXISTS tasks (id INT AUTO_INCREMENT PRIMARY KEY, taskName VARCHAR(255), taskType VARCHAR(255), project VARCHAR(255), priority VARCHAR(255), dueDate VARCHAR(255), status VARCHAR(255), assignee VARCHAR(255), client VARCHAR(255), notes VARCHAR(255), emailnotes VARCHAR(255), createdBy VARCHAR(255), completed VARCHAR(255))', (err, result) => {
        if(err){
            throw err;
        }
        console.log('Table created');
    })

})



app.get('/', (req, res) => {
    res.send('Backend Server is running')
});

app.post('/saveData', (req, res) => {

    db.query('INSERT INTO tasks (taskName, taskType, project, priority, dueDate, status, assignee, client, notes, emailnotes, createdBy, completed) VALUES (?,?,?,?,?, ?,?,?,?,?,?,?)', [req.body.taskName, req.body.taskType, req.body.project, req.body.priority, req.body.dueDate, req.body.status, req.body.assignee, req.body.client, req.body.notes, req.body.emailnotes, req.body.createdBy, req.body.completed], (err, result) => {
        if(err){
            throw err;
        }
        console.log('Data inserted');
    })
    res.send('Data received');
})

app.get('/getData', (req, res) => {
    const data = db.query('SELECT * FROM tasks', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})


app.listen(4201, () => {
    console.log('Server started at port 4201');
})