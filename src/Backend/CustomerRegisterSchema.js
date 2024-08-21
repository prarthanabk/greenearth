const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    custid:{
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
    pno:
    {
        type:Number
    },
    password:
    {
        type:String
    }

})   
const CustRegister = mongoose.model("customer_details",newSchema);

module.exports=CustRegister