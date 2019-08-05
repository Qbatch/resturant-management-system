const item = require('../../models/items')

const addItem = async () =>{
  
  app.post('/addItem', function (req, res ) {
    console.log(' It is (addItem) API ');
  
      item.updateOne(
      {name:req.body.name} , 
      {prize:550 , details:req.body.details , image:req.body.image , created:new Date()} , 
      {upsert:true}
    ).then(function(report){
          res.send(report);
    });
  });

}

module.exports = addItem ;       