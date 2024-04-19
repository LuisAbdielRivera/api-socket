import { Schema, model } from "mongoose";

const socketSchema = new Schema(
  {
    led: Number,
    potentiometer: Number,
    distance_sensor: Number,
    temperature_sensor: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("sockets", socketSchema);
