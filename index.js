// index.js
const express = require('express');
const mongoose = require('mongoose');
const conferenceRoutes = require('./routes/conferenceRoutes');
const pastConferenceRoutes = require("./routes/pastConferenceRoute")

const cors = require('cors');



mongoose
  .connect('mongodb+srv://adarsh00761:OkvQSaOJMoBWzAK5@cluster0.4vopa97.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

app.use('/conferences', conferenceRoutes);
app.use('/past-conferences', pastConferenceRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
