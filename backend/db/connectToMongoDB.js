import mongoose from "mongoose";

const connectToMongoDB = async () => {
    const url = process.env.MONGO_DB_URI;
    // console.log(url);
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting MongoDB", error.message);
    }
}

export default connectToMongoDB;