import express from 'express';
import tweet from '../db/models/tweet.mjs';
import user from '../db/models/user.mjs'
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    const dbUser = await user.find({ username });
    const {username, content} = req.body;
    if (dbUser) {
        const tweet = await tweet.create({
            body: newTweet, 
            user: dbUser._id
        });
        return res.json(tweet);
    } else {
        const newUser = await user.create({ username });
        const tweet = tweet.create({
            body: newTweet, 
            user: newUser._id, 
            content: content, 
            username: newUser.username
        });
        return res.json(tweet);
    }
});

router.get('/', async (req, res) => {
    res.send('Getting all tweets');
});

router.delete('/', async (req, res) => {
    res.send('Deleting tweet');
});

router.put('/', async (req, res) => {
    res.send('Updating tweet');
});

export default router;