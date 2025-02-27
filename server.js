const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

require("dotenv").config();
//database
connectDB();
const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tickets", ticketRoutes);
//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));