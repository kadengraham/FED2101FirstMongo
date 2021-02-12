const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db("FED2101FirstMongo");

    if(err){
        return console.log("Unable to connect to mongodb");
    }

    console.log("Connected to MongoDB server successfully");

    // db.collection('FED2101FirstMongo').insertOne({
    //     taskName: "Learn Mongodb",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log("There was an error inserting data");
    //     }
    // });

    // db.collection('FED2101FirstMongo').insertMany([
    //     {
    //         taskName: "Task1",
    //         completed: false
    //     },
    //     {
    //         taskName: "Task1",
    //         completed: false
    //     }
    //     ], (err, result) => {
    //         if(err){
    //             console.log("There was an error inserting many data");
    //         }
    // });

    //Update
    // db.collection("FED2101FirstMongo").updateOne({taskName: "Learn Mongodb"}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection("FED2101FirstMongo").updateMany({taskName: "Task1"}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // });

    //Delete
    // db.collection("FED2101FirstMongo").deleteOne({taskName: "Learn Mongodb"}, 
    // (result) => {
    //     console.log(result);
    // });

    db.collection("FED2101FirstMongo").deleteMany({taskName: "Task1"}).then((result) => {
        console.log(result);
    });

    //Read
    // console.log(db.collection("FED2101FirstMongo").find({taskName: "Learn Node"}));
    // db.collection("FED2101FirstMongo").find({taskName: "Learn Node"}).then((result) => {
    //     console.log(result);
    // });



    client.close();
});