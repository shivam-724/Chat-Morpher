import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

import authRoutes from "./routes/authroutes.js";
import connectToMongoDB from "./db/connectToMongodb.js";

const app = express();
app.use("/api/auth",authRoutes);
app.use(express.json()); // to parse the incoming request with JSON payloads {from req.body}

// app.get("/", (req,res) => {
//     res.send("Hello World!");
// })


app.listen(port, () =>{
    connectToMongoDB();
    console.log(`Server is running at port ${port}`);
})