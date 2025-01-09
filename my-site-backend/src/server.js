import express from 'express';
import { db, connectToDb } from './db.js';

const app = express();
app.use(express.json());

app.get('/api/projects/:name', async (req, res) => {
    const { name } = req.params;

    const project = await db.collection('projects').findOne({ name });

    if (project) {
        res.json(project);
    } else {
        res.sendStatus(404);
    }

    res.json(project);
})

app.put('/api/projects/:name/upvote', async (req, res) => {
    const { name } = req.params;
    
    await db.collection('projects').updateOne({ name }, {
        $inc: { upvotes: 1},
    });
    const project = await db.collection('projects').findOne({ name });

    if(project) {
        res.send(`The ${name} project now has ${project.upvotes} upvotes !!!`);
    }else {
        res.send('That article doesn\'t exist');
    }
    
});

app.post('/api/projects/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    await  db.collection('projects').updateOne({ name }, {
        $push: { comments: { postedBy, text} },
    });
    const project = await db.collection('projects').findOne({ name });

    if (project) {
        
        res.send(project.comments);
    }else {
        res.send('That article doesn\'t exist!');
    }
});

connectToDb(() => {
    console.log('Successfully Connected to database');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    })
}) 
 
