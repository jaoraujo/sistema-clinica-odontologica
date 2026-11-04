import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sistema - Clínica Odontológica",
      version: "1.0.0",
      description: "Documentação da API REST do Sistema - Clínica Odontológica."
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desenvolvimento"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;