// store required packages
const express = require('express');
const app = express();
const cors = require('cors');

const poemsRoutes = require('./routes/poems-simpler');

require('dotenv').config();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());

// corresponds to all the router in poemsRoutes
app.use('/poems', poemsRoutes);

// listening on given port
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})
