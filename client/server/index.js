const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

app.use(cors());

// Connect to DB
mongoose.connect('mongodb+srv://sazid:hzNsbtLhaYmSXBAj@cluster0-zaynt.mongodb.net/User_Activity?retryWrites=true');
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
