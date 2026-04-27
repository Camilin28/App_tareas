class Tarea {
  constructor(id, titulo, estado = "PENDIENTE") {
    if (!titulo || titulo.trim() === "") {
      throw new Error("El título no puede estar vacío");
    }

    this.id = id;
    this.titulo = titulo;
    this.estado = estado;
  }

  completar() {
    this.estado = "COMPLETADA";
  }

  estaPendiente() {
    return this.estado === "PENDIENTE";
  }
}

module.exports = Tarea;