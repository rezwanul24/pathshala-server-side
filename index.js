const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const courses = require('./data/cousrses.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('server runing');
})

app.get('/courses', (req,res)=>{
    res.send(courses);
})

app.get('/course/:id', (req,res)=>{
    const id = req.params.id;
    const course = courses.find(c => c.id === id)
    res.send(course)
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})