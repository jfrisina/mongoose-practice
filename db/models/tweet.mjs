// import mongoose package into app
import mongoose from 'mongoose';

// schema for what our tweets are going to look like
const tweetSchema = new mongoose.Schema({
   
user: {
    type: mongoose.Types.ObjectId, 
    ref: userId
    },    
title: {
    type: String, 
    required: true, 
    minLength: 1, 
    maxLength: 50
},
body: {
    type: String,
    required: true,
    minLength: 1, 
    maxLength: 280
},
author: {
    type: String,
 //   required: true
},
likes: {
    type: Number, 
    default: 0
}
}, {timestamps: true});

// export
const tweet = mongoose.model("tweet", tweetSchema);
module.exports = tweet;