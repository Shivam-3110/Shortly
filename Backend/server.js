import app from "./src/app";
import { connectDb } from "./src/db/db";


 await connectDb();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

