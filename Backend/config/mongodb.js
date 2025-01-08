import mongoose from "mongoose";


const connectDB = async()=>{

    mongoose.connection.on('connected',() =>{
        console.log(`Mongoose connected to ${process.env.MONGODB_URI}`);
    })

     await mongoose.connect(`${process.env.MONGODB_URI}`);
}

export default connectDB;