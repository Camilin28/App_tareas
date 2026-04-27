class EliminarTarea {
  constructor(repo) {
    this.repo = repo;
  }

  ejecutar(id) {
    const tarea = this.repo.buscarPorId(id);
    if (!tarea) throw new Error("Tarea no encontrada");

    this.repo.eliminar(id);
  }
}

module.exports = EliminarTarea;