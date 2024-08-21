const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    farmerid:{
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
    }

})   
const FarmerRegister = mongoose.model("farmer_details",newSchema);

module.exports=FarmerRegister