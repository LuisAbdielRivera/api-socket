import {Schema, model} from 'mongoose';

const socketSchema= new Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },

    led: Number,
    potentiometer: Number,
    distance_sensor:Number,
    costtemperature_sensor: Number,

},{
    versionKey: false,
    timestamps: true
})

export default model('sockets', socketSchema)