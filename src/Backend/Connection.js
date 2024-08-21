const MONGO_URI = 'mongodb+srv://user123:user123@cluster0.zkjwlb3.mongodb.net/GreenEarthWebsite?retryWrites=true&w=majority'

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log('DB Connected:');
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB

