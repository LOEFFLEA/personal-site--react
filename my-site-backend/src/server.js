import express from 'express';

let projectsInfo = [{
    name: 'learn-react',
    upvotes: 0,
    comments: [],
}, {
    name: 'learn-node',
    upvotes: 0,
    comments: [],
}, {
    name: 'mongodb',
    upvotes: 0,
    comments: [],
}]

const app = express();
app.use(express.json());

app.put('/api/projects/:name/upvote', (req, res) => {
    const { name } = req.params;
    const project = projectsInfo.find(a => a.name === name);
    if(project) {
        project.upvotes += 1;
        res.send(`The ${name} project now has ${project.upvotes} upvotes !!!`);
    }else {
        res.send('That article doesn\'t exist');
    }
    
});

app.post('/api/projects/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const project = projectsInfo.find(a => a.name === name);

    if (project) {
        project.comments.push({ postedBy, text});
        res.send(project.comments);
    }else {
        res.send('That article doesn\'t exist!');
    }
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})