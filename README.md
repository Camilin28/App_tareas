# App de Gestión de Tareas - Arquitectura Hexagonal

## Descripción

Aplicación backend desarrollada en Node.js que permite gestionar tareas académicas (crear, listar, completar, eliminar), aplicando arquitectura hexagonal.

## Problema

Permitir organizar tareas académicas de forma estructurada y separando lógica de negocio de infraestructura.

## Arquitectura

Se implementa arquitectura hexagonal separando:

* **Dominio:** entidad Tarea y reglas
* **Casos de uso:** lógica de aplicación
* **Puertos:** contratos de entrada/salida
* **Adaptadores:** API REST y repositorio en memoria

## Estructura

src/

* domain/
* application/
* infrastructure/

## Tecnologías

* Node.js
* Express
* UUID

## Ejecución

```bash
npm install
node index.js
```

## Endpoints

### Crear tarea

POST /api/tareas

### Listar tareas

GET /api/tareas

### Completar tarea

PATCH /api/tareas/:id/completar

### Listar pendientes

GET /api/tareas/pendientes

### Eliminar tarea

DELETE /api/tareas/:id

## Explicación

El dominio no depende de frameworks.
Los casos de uso usan puertos.
Los adaptadores implementan los puertos.

## Estado

Aplicación funcional con separación de responsabilidades.

## Diagrama

[ Cliente (Postman) ]
          ↓
[ API REST - Express ]
          ↓
[ Controlador ]
          ↓
[ Casos de uso ]
          ↓
[ Dominio (Tarea) ]
          ↓
[ Repositorio (Memoria) ]