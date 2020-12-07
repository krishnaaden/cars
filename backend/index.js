const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carSchema = new Schema({
  name: String,
  quarter: String,
  year: Number,
  img: String,
  type: String,
  hp: String
});

var carModel = mongoose.model('Car', carSchema);

mongoose.connect('mongodb+srv://admin:admin007@cluster0.lacle.mongodb.net/Clustor0?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

/**
 * id: string;
  name: string;
  quarter: string;
  year: number;
  img: string;
  type: string;
  hp: string;
 */
app.get('/cars/:id', (req, res) => {
  const id = req.params.id;
  console.log(':: id', id);
  const car = {
    id: 1, 
    name: 'Car 1',
    quarter: 'Q1',
    year: 2020,
    img: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/45242/bmw-x1-facelift-right-front-three-quarter2.jpeg?q=85',
    type: 'hatchback',
    hp: 1500
  };
  carModel.find({_id: id}, (err, docs) => {
    if(!err) {
      if(docs.length > 0){
        res.json(docs[0]).status(200);
      } else {
        res.json([]).status(500);
      }
    } else {
      res.json([]).status(500);
    }
  });
});

app.get('/cars', (req, res) => {
  carModel.find({}, (err, docs)=>{
    if(err) {
      res.send([]).status(500);
    } else  {
      res.json(docs).status(200);
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})