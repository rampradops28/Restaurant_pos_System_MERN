const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Set port and connect to MongoDB
const PORT = config.port;
connectDB();

// Allow frontend (localhost:5173) to access backend with cookies
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
}));

// Parse JSON and cookies from incoming requests
app.use(express.json());
app.use(cookieParser());

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Hello from POS Server!" });
});

// API routes for user, order, table, and payment
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));
app.use("/api/payment", require("./routes/paymentRoute"));

// Handle errors globally
app.use(globalErrorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`);
});
