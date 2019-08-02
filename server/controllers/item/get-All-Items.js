var app = require('../config/express');
const item = require('../models/items')

const getAllItems = async () => {
    app.get('/getAllItems',function(req,res){

        console.log(' It is (getAllItems) API ');
        await item.find({})
        .then(function( all ){
            res.json(all);
            const rtnObj = all
        });

    });
    return rtnObj;
}

module.exports = getAllItems ;