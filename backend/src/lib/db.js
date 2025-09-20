import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONODB CONNECTED:", conn.connection.host)
    } catch(error){
        console.error("Error connection to MONODB:", error)
        process.exit(1); //1 means fails, 0 means success

    }
}