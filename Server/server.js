"use strict";

const express = require('express');
const cors = require('cors');
const spentsRoutes = require('./routes/spents');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/spents', spentsRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});