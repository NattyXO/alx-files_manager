const express = require('express');
const allRoutes = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// sets all the routes created in routes/index
app.use('/', allRoutes);

app.listen(port, () => console.log(`Server running on port ${port}\n...`));
module.exports = app;
