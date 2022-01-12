const express = require('express');
const sequelize = require('./database/config');
const PORT = 3001;
const { create, getAll } = require('./controller/users');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.post('/users', create);
app.get('/users', getAll);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});