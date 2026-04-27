class ListarPendientes {
  constructor(repo) {
    this.repo = repo;
  }

  ejecutar() {
    return this.repo.listar().filter(t => t.estaPendiente());
  }
}

module.exports = ListarPendientes;