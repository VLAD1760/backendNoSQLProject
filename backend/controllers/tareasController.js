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

    const tarea = await Tarea.findById(req.params.id)
    if (!tarea) {
        res.status(400)
        throw new Error("La tarea no fue encontrada") 
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new : true})

    res.status(200).json(tareaUpdated)
})

const deleteTareas = aysncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)
    if (!tarea) {
        res.status(400)
        throw new Error("La tarea no fue encontrada") 
    }

    await tarea.deleteOne(tarea)
    //await Tarea.findByIdAndDelete(req.params.id)

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getTareas, 
    setTareas,
    updateTareas,
    deleteTareas
} 