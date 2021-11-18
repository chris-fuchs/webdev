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

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});