const express = require('express');

/*const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");*/
const cors = require('cors');
const app = express();
const booksRoute = require('./route/book/booksRoute');
const publishersRoute = require('./route/publisher/publishersRoute');
const usersRoute = require('./route/user/usersRoute');

app.use(express.json());
app.use(cors());

/*const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
      },
      apis: ['./route/*.js'], // files containing annotations as above
  };
  
  const specs = swaggerJsdoc(options);*/

  /*app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );*/

app.use(booksRoute);
app.use(publishersRoute);
app.use(usersRoute);
app.listen(3333);