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
    res.sendFile(__dirname+'/index.html');
});

app.get('/students',function(req,res){
    console.log('triggered routing for json student file')
    res.sendFile('students.json', {root: '.'})
});