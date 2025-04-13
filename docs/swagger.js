// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Tareas',
      version: '1.0.0',
      description: 'Documentación de la API para la gestión de tareas con autenticación JWT',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos con comentarios Swagger
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
