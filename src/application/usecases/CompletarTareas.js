class CompletarTarea {
  constructor(tareaRepository) {
    this.tareaRepository = tareaRepository;
  }

  ejecutar(id) {
    const tarea = this.tareaRepository.buscarPorId(id);
    if (!tarea) {
      throw new Error("Tarea no encontrada");
    }

    tarea.completar();
    this.tareaRepository.guardar(tarea);
    return tarea;
  }
}

module.exports = CompletarTarea;