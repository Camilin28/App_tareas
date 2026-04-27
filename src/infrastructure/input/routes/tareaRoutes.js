const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.post("/tareas", controller.crear);
  router.get("/tareas", controller.listar);
  router.patch("/tareas/:id/completar", controller.completar);
  router.get("/tareas/pendientes", controller.pendientes);

  return router;
};