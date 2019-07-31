const mongoose = require('mongoose');
const express = require('express');

// destructuring krty howy handle krna ha
var model = require('./model');

var bodyParser = require('body-parser');
var app = express()

const MONGO_URL = 'mongodb://127.0.0.1:27017/rms';
mongoose.connect(MONGO_URL)
.then((db) => {console.log('MongoDB Connected to RMS');})
.catch(err => console.log('MongoDB::', err));
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  next();
});





// POST for user

app.post('/testPost', function (req, res) {
    console.log(req.body)
    const {inputObj} = req.body;
    model.updateOne(
        { name : inputObj.name , password : inputObj.password },
        {},
        {upsert : true}
        )
        .then(function(users){
            res.send(users);
        });
        console.log('Post is called',req.body);
})
    
    

app.listen(3002, () => console.log(`Example app listening on port ${3002}!`))























//////////////////////////////////////////////////////////////    
//     //  GET request 
    
//     app.get('/testGet', function (req, res) {
//         model.find({},function(err , userr){
//         res.json(userr);
//       });
//     });
    
//     // PUUUUUT request 
    
//     app.put('/testPut', function (req, res) {
//         console.log(" Request Body " , req.body );
//         model.findByIdAndUpdate({ _id : req.body.objToUpdate._id} , { name : req.body.updatedObj.name , age : req.body.updatedObj.age , phone : req.body.updatedObj.phone , email : req.body.updatedObj.email } , {upsert : false})
//   .then(function(rs){
//     console.log(" Response  : " , req.body.updatedObj);
//     res.send(" Response  : " , rs);
//   });
//   res.send('Got a PUT request at /user');
// })


//   // DELETE request

// app.delete('/testDel', function (req, res) {
//   model.deleteOne({name : req.body.user.name} )
//   .then(function(users){
//     res.send(users);
//   });
//   // console.log('Delete is Called' , req.body);
//   // res.send('Got a DELETE request at /user');
// })
/////////////////////////////////////////////////////////////////