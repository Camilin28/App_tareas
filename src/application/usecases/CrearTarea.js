const Tarea = require("../../domain/tarea");
const { v4: uuidv4 } = require("uuid");

class CrearTarea {
  constructor(repo) {
    this.repo = repo;
  }

  ejecutar(titulo) {
    const tarea = new Tarea(uuidv4(), titulo);
    this.repo.guardar(tarea);
    return tarea;
  }
}

module.exports = CrearTarea;