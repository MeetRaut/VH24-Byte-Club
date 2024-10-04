const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-route');
const instituteRoutes = require('./routes/institute-route');
const donationRoutes = require('./routes/donation-route'); // Import donation routes
const adminRoutes = require('./routes/admin-routes');

require('dotenv').config();
const cors = require("cors");
const connectDb = require("./db/db");

const app = express();
connectDb(); // Connect to the database

app.use(bodyParser.json());
app.use(cors()); // Enable CORS if necessary

// Mount the Routers
app.use('/api/users', userRoutes);
app.use('/api/institutes', instituteRoutes);
app.use('/api/donations', donationRoutes); // Add donation routes here
app.use('/api/admin', adminRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
