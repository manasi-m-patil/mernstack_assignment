// import express from "express";
// import mongoose from "mongoose";
// import { sampleData } from "./models/data.js";

// const app = express();


// app.get('/', (req, res) => {
//     console.log(req)
//     return res.send('Welcome to mern project')
// });

  

// mongoose.connect('mongodb://localhost:27017/sampledb').then(()=>{
//     console.log('App is connected to database');
//     app.listen(8500, function() {
//         console.log("started rest api at 8500..");
//     })
// })
// .catch((error)=>{
//     console.log(error);
// });

// app.get('/data',async(req, res) => {
//     try {
//         const sampledata = await sampleData.find();
//         console.log(sampledata);
//         return res.status(200).json(sampledata);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'No data found in sampleData collection' });
//     }
// });


// const express = require('express');
// const app = express();
// const MongoClient = require('mongodb').MongoClient;

// // Replace the following with your MongoDB connection string
// const url = 'mongodb://localhost:27017';
// const dbName = 'myproject';

// app.get('/data', function(req, res) {
//   const startTime = req.query.startTime;
//   const endTime = req.query.endTime;

//   MongoClient.connect(url, function(err, client) {
//     if(err) {
//       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//     }
//     console.log('Connected...');
    
//     const db = client.db(dbName);

//     // Query the data based on the startTime and endTime
//     db.collection('data').find({ timestamp: { $gte: startTime, $lte: endTime }}).toArray(function(err, res) {
//       if(err) {
//         console.log('Error occurred while finding data...\n',err);
//       } else {
//         console.log('Data found successfully...');
//         res.send(res);
//       }
//       client.close();
//     });
//   });
// });

// app.listen(5000, function() {
//   console.log('Server is running on port 5000...');
// })

const express = require('express');

import App from './App.js';

const app = express();

const MongoClient = require('mongodb').MongoClient;

// Replace the following with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'sampledb';

app.get('/data', function(req, res) {
  const startTime = req.query.startTime;
  const endTime = req.query.endTime;

  MongoClient.connect(url, function(err, client) {
    if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
      res.status(500).json({ error: 'Error occurred while connecting to MongoDB Atlas' });
      return;
    }
    console.log('Connected...');
    
    const db = client.db(dbName);

    // Query the data based on the startTime and endTime
    db.collection('data').find({ timestamp: { $gte: startTime, $lte: endTime }}).toArray(function(err, result) {
      if(err) {
        console.log('Error occurred while finding data...\n',err);
        res.status(500).json({ error: 'Error occurred while finding data' });
        return;
      }
      console.log('Data found successfully...');
      res.json(result);
      client.close();
    });
  });
});

app.listen(5000, function() {
  console.log('Server is running on port 5000...');
});
