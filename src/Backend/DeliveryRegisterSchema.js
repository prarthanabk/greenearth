const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    deliveryguyid:{
        type:Number
    },
    fullname:
    {
        type:String
    },
    email:
    {
        type:String
    },
    phone:
    {
        type:Number
    },
    password:
    {
        type:String
    },
    address:
    {
        type:String
    },
    city:
    {
        type:String
    },
    adhar:
    {
        type:Number
    }

})   
const DeliveryRegister = mongoose.model("deliveryguy_details",newSchema);

module.exports=DeliveryRegister