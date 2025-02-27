const jwt = require("jsonwebtoken");
require("dotenv").config();


//no access to users
const authMiddleware = (roles = []) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (roles.length && !roles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};







module.exports = authMiddleware;