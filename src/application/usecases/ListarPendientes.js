class ListarPendientes {
  constructor(tareaRepository) {
    this.tareaRepository = tareaRepository;
  }

  ejecutar() {
    return this.tareaRepository
      .listar()
      .filter(t => t.estaPendiente());
  }
}

module.exports = ListarPendientes;