class CompletarTarea {
  constructor(repo) {
    this.repo = repo;
  }

  ejecutar(id) {
    const tarea = this.repo.buscarPorId(id);
    if (!tarea) throw new Error("Tarea no encontrada");

    tarea.completar();
    this.repo.guardar(tarea);
    return tarea;
  }
}

module.exports = CompletarTarea;