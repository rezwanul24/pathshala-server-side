const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const courses = require('./data/cousrses.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('server runing');
})



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})