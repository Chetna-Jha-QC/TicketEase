const mongoose = require("mongoose");

//schema
const TicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateOfTravel: Date,
  modeOfTravel: { type: String, enum: ["rail", "bus"] },
  perHeadPrice: Number,
  from: String,
  to: String,
  numberOfPassengers: Number,
  totalPrice: Number,
});



//totaling
TicketSchema.pre("save", function (next) {
  this.totalPrice = this.perHeadPrice * this.numberOfPassengers;
  next();
});




module.exports = mongoose.model("Ticket", TicketSchema);