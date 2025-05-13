const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const cors = require("cors"); 
 // Import the notes route 
const app = express();
app.use(cors()); 
const PORT = 5000;

app.use(express.json()); // Required to parse JSON body
connectDB(); // Connect to MongoDB

app.use("/api/auth/", authRoutes);
app.use("/api/notes/", require("./routes/notes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
