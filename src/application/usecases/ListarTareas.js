class ListarTareas {
  constructor(repo) {
    this.repo = repo;
  }

  ejecutar() {
    return this.repo.listar();
  }
}

module.exports = ListarTareas;