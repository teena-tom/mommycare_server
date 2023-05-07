require('dotenv').config();
const PORT = process.env.PORT || 5050;

const express = require('express');
const cors = require('cors');

const app = express();
const daycareRoutes = require('./routes/daycareRoute');
const childrenRoutes = require('./routes/childrenRoute');

app.use(cors());
app.use(express.json());

app.use('/api/daycares', daycareRoutes);
app.use('/api/children', childrenRoutes);

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});