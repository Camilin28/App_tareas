class InMemoryTareaRepository {
  constructor() {
    this.tareas = [];
  }

  guardar(tarea) {
    const i = this.tareas.findIndex(t => t.id === tarea.id);
    if (i >= 0) this.tareas[i] = tarea;
    else this.tareas.push(tarea);
  }

  listar() {
    return this.tareas;
  }

  buscarPorId(id) {
    return this.tareas.find(t => t.id === id);
  }

  eliminar(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}

module.exports = InMemoryTareaRepository;