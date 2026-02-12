const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@cosmofleet.com" && password === "1234") {
    const token = jwt.sign(
      { email, role: "admin" },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login successful 🚀",
      token,
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
};