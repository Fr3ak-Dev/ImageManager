import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://root:<db_password>@cluster0.azmzy.mongodb.net/ImageManager';
        const connection = await mongoose.connect(url);
        const url2 = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`Connected to MongoDB at ${url2}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};