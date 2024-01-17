const aysncHandler = require('express-async-handler')

const getTareas = aysncHandler(async (req, res) => {
    res.status(200).json({ message: "Obtener Tareas" })
})

const setTareas = aysncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("Por favor teclea una description")
    }
    res.status(201).json({ message: "crear Tareas" })
})

const updateTareas = aysncHandler(async (req, res) => {
    res.status(200).json({ message: `Modificar la tarea numero ${req.params.id}` })
})

const deleteTareas = aysncHandler(async (req, res) => {
    res.status(200).json({ message: `Eliminar la tarea numero ${req.params.id}` })
})

module.exports = {
    getTareas, 
    setTareas,
    updateTareas,
    deleteTareas
} 