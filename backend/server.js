import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 5000;

import authRoutes from "./routes/authroutes.js";
import connectToMongoDB from "./db/connectToMongodb.js";
import messageRoutes from "./routes/messageroutes.js";

const app = express();
app.use(express.json()); // to parse the incoming request with JSON payloads {from req.body}
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

// app.get("/", (req,res) => {
//     res.send("Hello World!");
// })


app.listen(port, () =>{
    connectToMongoDB();
    console.log(`Server is running at port ${port}`);
})