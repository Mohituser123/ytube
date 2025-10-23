import mongoose from "mongoose";
// to connect mongodb with mngodb atlas url
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb //goes towards index.js