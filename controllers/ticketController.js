const Ticket = require("../models/Ticket");
const sendEmail = require("../utils/emailService");

exports.bookTicket = async (req, res) => {
  try {
    const ticket = new Ticket({ ...req.body, userId: req.user.id });
    await ticket.save();
    
    await sendEmail(req.user.email, "Ticket Confirmation", "Your ticket is confirmed.");
    await sendEmail("venugopal.burli@masaischool.com", "New Booking Alert", "A ticket was booked.");

    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};