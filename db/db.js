const {MongoClient, ObjectId} = require('mongodb');
const mongoose = require("mongoose")

const uri = "mongodb+srv://axel:haFhbca91@cluster0.rsqvv.mongodb.net/fullstackbackend?retryWrites=true&w=majority";


async function connect() {

    return mongoose
        .connect(uri)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.log("db error",error);
            process.exit(1)
        })
}
module.exports = {
    connect,
}