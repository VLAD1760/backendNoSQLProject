const aysncHandler = require('express-async-handler')
const Tarea = require('../model/tareasModel')

const getTareas = aysncHandler(async (req, res) => {
    const tareas = await Tarea.find()
    
    res.status(200).json(tareas)
})

const setTareas = aysncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error("Por favor teclea una description")
    }

    const tarea = await Tarea.create({
        texto: req.body.texto,
    })


    res.status(201).json({message: tarea })
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