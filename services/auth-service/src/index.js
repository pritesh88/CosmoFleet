const express = require("express");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.json({ status: "Auth service is running 🚀" });
});

// start server
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});


const jwt = require("jsonwebtoken");

const SECRET = "cosmofleet_secret"; // later move to env

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  // dummy user check (for now)
  if (email === "admin@cosmofleet.com" && password === "1234") {
    const token = jwt.sign(
      { email, role: "admin" },
      SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login successful 🚀",
      token,
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});



// JWT verification middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // attach user info
    next(); // allow request
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

app.get("/auth/protected", verifyToken, (req, res) => {
  res.json({
    message: "Access granted 🚀",
    user: req.user,
  });
});