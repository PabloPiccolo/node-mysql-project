const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path: './.env'});


const app = express();

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
     database: process.env.DATABASE,
     charset:"utf8mb4",
})

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

// const publicDirectory2 = path.join(__dirname,'./assets');
// app.use(express.static(publicDirectory2));
 console.log(__dirname);

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.set('view engine','hbs');

// db.query(q,[values],(err,data)=>{
//     if(err) return res.json(err);
//     return res.json("Book has been created successfully");
// })

db.connect( (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("MYSQL Connected");
    }
})

//Define Routes
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/login',require('./routes/login'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{console.log(`Server started on port ${port}`)})