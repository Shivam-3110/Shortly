import app from "./src/app.js";
import dotenv from "dotenv"
import { connectDb } from "./src/db/db.js";

dotenv.config();

 await connectDb();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

