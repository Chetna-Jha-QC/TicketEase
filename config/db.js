require('dotenv').config();
const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        const dbUrl = process.env.MONGO_URI; // used: mongodb://127.0.0.1:27017/ticketease
        await mongoose.connect(dbUrl, {
            useNewrlParser : true, useUnifiedTopology: true });
        console.log("mongo Connect Established");
        } catch (error) {
            console.error('MongoDB connection error:', error);
        }
       

    };

    module.exports = connectToDB;
