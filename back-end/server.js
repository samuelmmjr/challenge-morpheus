const express = require('express');
const sequelize = require('./database/config');
const PORT = 3001;

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});