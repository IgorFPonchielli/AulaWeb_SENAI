const express = require('express');

/*const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");*/

const app = express();
const booksRoute = require('./route/book/booksRoute');
const publishersRoute = require('./route/publisher/publishersRoute');

app.use(express.json())

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
app.listen(3333);