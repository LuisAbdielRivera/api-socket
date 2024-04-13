// Aqui va ir la conexion de MongoDB con la API
import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING_DB)
.then(db=>console.log('Database connected'))
.catch(err=>console.error(err))

export default mongoose;