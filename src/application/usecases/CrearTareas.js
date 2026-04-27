const Tarea = require("../../domain/Tarea");
const { v4: uuidv4 } = require("uuid");

class CrearTarea {
  constructor(tareaRepository) {
    this.tareaRepository = tareaRepository;
  }

  ejecutar(titulo) {
    const tarea = new Tarea(uuidv4(), titulo);
    this.tareaRepository.guardar(tarea);
    return tarea;
  }
}

module.exports = CrearTarea;