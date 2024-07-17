import { app } from "./app";
require('dotenv').config();

// Create server
app.listen(process.env.PORT, () => {
    console.log(`Server run in ${process.env.PORT}`)
})