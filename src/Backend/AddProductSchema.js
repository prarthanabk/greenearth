const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    pid:{
        type:Number
    },
    pname:
    {
        type:String
    },
    ppa:
    {
        type:String
    },
    qty:
    {
        type:Number
    },
    ppu:
    {
        type:Number
    },
    status:
    {
        type:String
    },
    password:
    {
        type:String
    },
    phone:
    {
        type:Number
    },
    ttc:
    {
        type:Number
    }

})   
const AddProductSchema = mongoose.model("product_details",newSchema);

module.exports=AddProductSchema