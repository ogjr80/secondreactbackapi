var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var People = require('./model/people');

mongoose.connect('mongodb://localhost:27017/peopledb', function(){
  console.log('database connection successfull');
})




var app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/people', function(req, res){
  People.find({}, function(err, people){
    res.json(people);
  })
})

app.post('/people', function(req, res){
  var people = new People(req.body);
  people.save(function(err, pep){
    res.json(pep);
  })
})


app.listen(8000, function(){
  console.log('app running on port 8000');
})
