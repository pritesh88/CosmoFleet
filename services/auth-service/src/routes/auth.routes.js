const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

router.post("/login", login);
router.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Access granted 🚀",
    user: req.user,
  });
});

module.exports = router;