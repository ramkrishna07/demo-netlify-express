'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
const express_path=path.join(__dirname,"../express");
console.log(express_path);
// const partial_path=path.join(__dirname,"../templates/partials");

// app.set('view engine','hbs');
// app.set('views',template_path);
// hbs.registerPartials(partial_path);

// router.get('/', (req, res) => {
//     res.render('index');
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express.js!</h1>');
//   res.end();
// });
// router.get('/next', (req, res) => {
//     res.render('next');
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello from another Express.js!</h1>');
//     res.end();
// });






router.get('/',(req,res)=>{
    res.sendFile(path.join(express_path+'/index.html'));
})
router.get('/about',(req,res)=>{
    res.sendFile(path.join(express_path+'/about.html'));
})

app.use(bodyParser.json());
app.use('/.netlify/functions/app', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));


module.exports = app;
module.exports.handler = serverless(app);