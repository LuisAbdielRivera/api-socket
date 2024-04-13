import app from './app.js';
import database from './database.js';

app.listen(process.env.SERVER_PORT, () =>{
    console.log("Server on Port: "+ process.env.SERVER_PORT)
})