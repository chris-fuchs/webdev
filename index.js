// const http = require('http');
// const PORT = process.env.PORT || 5000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
  
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(PORT, () => {
//   console.log(`Server running on ${PORT}/`);
// });

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

  // https://stackoverflow.com/a/38757303
app.use(express.static("public"));

app.get('/',function(req,res){
    let indexPath = path.join(__dirname+'/index.html');
    //console.log(indexPath);
    // res.sendFile("index.html");
    res.sendFile(__dirname+'/index.html');
    //res.send('GET request to the homepage')
    //__dirname : It will resolve to your project folder.
});

app.get('/students',function(req,res){
    console.log('triggered routing for json student file')
    res.sendFile('students.json', {root: '.'})
});