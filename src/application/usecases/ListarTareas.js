class ListarTareas {
  constructor(tareaRepository) {
    this.tareaRepository = tareaRepository;
  }

  ejecutar() {
    return this.tareaRepository.listar();
  }
}

module.exports = ListarTareas;