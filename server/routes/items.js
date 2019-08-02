var express = require('express')
var  { addItem } = require( '../controllers/item/add-Item');
// import { addItem } from '../controllers/item/add-Item';
const Router = express.Router();

Router.route('/routeAddItem').post( (req,res) => {

    const {
        name ,
        price ,
        details ,
        image 
    } = req.body ;

    addItem(
        { name , price , details , image }
    ).then((result) => {
        res.send(result)
    });

});

module.exports = Router ;