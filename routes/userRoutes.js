const express = require("express");
const { getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware(["admin"]), getAllUsers);
router.get("/:id", authMiddleware(["admin"]), getUserById);
router.put("/:id", authMiddleware(["admin"]), updateUser);
router.delete("/:id", authMiddleware(["admin"]), deleteUser);

module.exports = router;