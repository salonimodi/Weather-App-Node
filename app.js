const request = require('request');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fs =  require('fs');


rootPath = __dirname;

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine','hbs');
app.use(express.static(rootPath));

// const url =
//  "http://api.weatherstack.com/current?access_key=1dc13e5549f96974e595acb899a344ed&query=New York"
// request({url: url, json : true}, (error, response)=> {
//    const data = response.body.current;

//    console.log(`It is currently ${data.wind_degree} out`);
// }) 

app.get('/', (req, res) => {

   fs.readFile('./views/app.hbs', (err, resp) => {
      if (err) {
         res.writeHead(404, {
            'Content-Type': 'text/pain'
         });
         res.end();
      } else if (resp) {
         res.writeHead(200, {
            'Content-Type': 'text/html'
         });
         res.write(resp);
      }
      res.end();
   })

})

app.get('/about/',(req, res)=> {
   fs.readFile('./views/about.hbs', (err, resp) => {
      if (err) {
         res.writeHead(404, {
            'Content-Type': 'text/pain'
         });
         res.end();
      } else if (resp) {
         res.writeHead(200, {
            'Content-Type': 'text/html'
         });
         res.write(resp);
      }
      res.end();
   })

})

app.get('/contact/',(req, res)=> {
   fs.readFile('./views/contact.hbs', (err, resp) => {
      if (err) {
         res.writeHead(404, {
            'Content-Type': 'text/pain'
         });
         res.end();
      } else if (resp) {
         res.writeHead(200, {
            'Content-Type': 'text/html'
         });
         res.write(resp);
      }
      res.end();
   })

})

app.listen(port, () => {
   console.log("running from "+ port+" server");
})