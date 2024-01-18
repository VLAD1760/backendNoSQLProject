const mongoose= require('mongoose')

const tareaSchema = mongoose.Schema({
     texto: {
        type: String,
        required: [true,  "por favor teclea una description del la tarea"]
     },
     completada: {
        type: Boolean,
        default: false
     }
},{
    timestamps:true
})

module.exports = mongoose.model('Tarea', tareaSchema)