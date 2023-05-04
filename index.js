require('dotenv').config();
const PORT = process.env.PORT || 5050;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});