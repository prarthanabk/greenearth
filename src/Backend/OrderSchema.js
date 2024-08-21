const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    orderid:{
        type:Number
    },
    inventoryid:
    {
        type:Number
    },
    picklocation:
    {
        type:String
    },
    droplocation:
    {
        type:String
    },
    qty:
    {
        type:Number
    },
    phone:
    {
        type:Number
    },
    
    
    password:
    {
        type:String
    }
    ,
    status:
    {
        type:String
    }

})   
const OrderSchema = mongoose.model("orders",newSchema);

module.exports=OrderSchema