// import  MongoClient from mongodb package
import { MongoClient } from 'mongodb';
// import dotenv module from npm package dotenv, which helps keep sensitive or environment-specific config variales separate from codebase
import dotenv from 'dotenv';

import mongoose from 'mongoose';

dotenv.config()

const client = newMongoClient(process.env.ATLAS_URI)

// set up connection and error handling
let conn;
try {
    conn = await client.connect();
} catch (error) {
    console.log(error);
}

module.exports = function connectDB() {
    mongoose.connect(process.env.ATLAS_URI);
    const db = mongoose.connection;
    db.on('error', e()=> console.log(e));
    db.on('open', conosle.log('Connected to Mongo'));
    db.on('close', ()=> console.log('Disconnected from MongoDB'));
}