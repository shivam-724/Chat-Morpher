import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads {from req.body}
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/", (req,res) => {
//     res.send("Hello World!");
// })


app.listen(port, () =>{
    connectToMongoDB();
    console.log(`Server is running at port ${port}`);
})