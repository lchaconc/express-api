import express from "express"
import morgan from "morgan"
import cors from "cors"
import routerUsuarios from "./routers/router.usuarios"

const app = express();

morgan("tiny");

app.use(express.json());
app.use(cors());

app.use(express.static("./public"));
app.use( "/api", routerUsuarios )

export default app;
