const MongoClient = require('mongodb').MongoClient;

// Replace the following with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'sampledb';

// Replace the following with your raw sample data
const rawData = [
  { timestamp: '10:00:00', sample: 1 },
  { timestamp: '11:00:00', sample: 0 },
  
];

MongoClient.connect(url, function(err, client) {
  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  
  const db = client.db(sampledb);

  // Import the raw sample data into a collection
  db.collection('sampleData').insertMany(rawData, function(err, res) {
    if(err) {
      console.log('Error occurred while inserting data...\n',err);
    } else {
      console.log('Data inserted successfully...');
    }
    client.close();
  });
});