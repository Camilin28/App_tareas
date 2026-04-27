class TareaController {
  constructor(crear, listar, completar, pendientes) {
    this.crearTarea = crear;
    this.listarTareas = listar;
    this.completarTarea = completar;
    this.listarPendientes = pendientes;
  }

  crear = (req, res) => {
    try {
      const tarea = this.crearTarea.ejecutar(req.body.titulo);
      res.status(201).json(tarea);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };

  listar = (req, res) => {
    res.json(this.listarTareas.ejecutar());
  };

  completar = (req, res) => {
    try {
      const tarea = this.completarTarea.ejecutar(req.params.id);
      res.json(tarea);
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  };

  pendientes = (req, res) => {
    res.json(this.listarPendientes.ejecutar());
  };
  eliminar = (req, res) => {
  try {
    this.eliminarTarea.ejecutar(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
}

module.exports = TareaController;