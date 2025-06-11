import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivamlashkari246:TaskFlow06@cluster0.bnrwzvs.mongodb.net/TaskFlow')
    .then(() => console.log("DB Connected Successfully"));
}