const express = require("express");

const Repo = require("./src/infrastructure/output/InMemoryTareaRepository");

const Crear = require("./src/application/usecases/CrearTarea");
const Listar = require("./src/application/usecases/ListarTareas");
const Completar = require("./src/application/usecases/CompletarTarea");
const Pendientes = require("./src/application/usecases/ListarPendientes");

const Controller = require("./src/infrastructure/input/controllers/TareaController");
const rutas = require("./src/infrastructure/input/routes/tareaRoutes");

const app = express();
app.use(express.json());

const repo = new Repo();

const controller = new Controller(
  new Crear(repo),
  new Listar(repo),
  new Completar(repo),
  new Pendientes(repo)
);

app.use("/api", rutas(controller));

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});