import express from 'express'
import {addItem , getAllItems} from '../controllers/item';
const Router = express.Router();

Router.route('/routeAddItem').post( (req,res) => {
    
    console.log("I am routeAddItem");
    const { name, price, details, image } = req.body ;
    addItem({ name, price, details, image }).then((result) => {
        res.send(result);
    });

});

Router.route('/routeAllItems').get( (req,res) => {
   
    console.log("I am routeAllItems");
    getAllItems().then((result) => {
        console.log("All Items Are ",result)
        res.send(result)
    });

});


export default Router ;