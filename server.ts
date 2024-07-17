import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

// Create server
app.listen(process.env.PORT, () => {
  console.log(`Server run in ${process.env.PORT}`);
  connectDB();
});
