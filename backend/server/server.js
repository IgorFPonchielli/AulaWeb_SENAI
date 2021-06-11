const express = require('express');

const cors = require('cors');
const app = express();
const booksRoute = require('./route/book/booksRoute');
const publishersRoute = require('./route/publisher/publishersRoute');
const usersRoute = require('./route/user/usersRoute');
const loginRoute = require('./route/login/loginRoute');

app.use(express.json());
app.use(cors());

app.use(booksRoute);
app.use(publishersRoute);
app.use(usersRoute);
app.use(loginRoute);
app.listen(3333);