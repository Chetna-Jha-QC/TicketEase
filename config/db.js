require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI; //mongodb://127.0.0.1:27017/ticketease
        await mongoose.connect(dbURI, 
            { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
