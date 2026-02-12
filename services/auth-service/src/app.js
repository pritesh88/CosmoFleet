require("dotenv").config();
const express = require("express");

const app = express();

// Import Routes
const authRoutes = require("./routes/auth.routes");

// Middleware
app.use(express.json());
app.use("/auth", authRoutes);

// Server

app.get("/health",(req,res)=>{
     res.json({status:"Auth service running 🚀"});
});

const { PORT } = require("./config/config");



app.listen(PORT, () => {
  console.log(`🚀 Auth Service running on port ${PORT}`);
});