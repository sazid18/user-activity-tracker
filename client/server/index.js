const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require("morgan");

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true }));

// Connect to DB
mongoose.connect('mongodb+srv://sazid:cMTQU1ZkB465usLD@cluster0-ww20z.mongodb.net/User_Activity?retryWrites=true');
let db=mongoose.connection;

db.once('open',()=>{
console.log('Connected to Database');
});

db.on('error',(err)=>{
	console.log(err);
});

const myModel = require('./models/data.js');

// Save to DB
app.post('/save', (req, res) => {
	  console.log(req.body);
    const obj = new myModel({
        userEvent : req.body.userEvent,
        image : req.body.image
    });
    obj.save()
        .then((savedResult)=>{
            console.log(savedResult);
            res.status(200).json({
                status: 'success',
                message: 'Message Saved',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            status: 'fail',
            message: err
            });
        });
});


app.listen(6523, () => {
    console.log("Server Listening at port " + 6523);
});
