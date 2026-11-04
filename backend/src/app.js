import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";
import express from "express";

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;