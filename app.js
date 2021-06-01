const request = require('request');
const path = require('path');
const express = require('express');
const hbs = require('hbs');


rootPath = __dirname;

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine','hbs');
app.use(express.static(rootPath));

const url =
 "http://api.weatherstack.com/current?access_key=1dc13e5549f96974e595acb899a344ed&query=New York"
request({url: url, json : true}, (error, response)=> {
   const data = response.body.current;

   console.log(`It is currently ${data.wind_degree} out`);
}) 

app.get('',(req, res)=> {
   // res.sendFile(rootPath + '/app.html');
  // res.render('app');
  console.log()
  res.sendFile(path.join(__dirname, './views/app.hbs'));
})


app.listen(port, () => {
   console.log("running from "+ port+" server");
})