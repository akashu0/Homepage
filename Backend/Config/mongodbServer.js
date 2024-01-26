import mongoose from 'mongoose'
import dotenv from 'dotenv';
            dotenv.config();
 const {Connection} = process.env;

          

 const connectToMongoDB = async () => {
    await mongoose.connect(Connection,{
                 useUnifiedTopology:true,
   }).then(()=>{
    console.log(`Connected to MongoDB Atlas`);
}).catch((error)=>{
    console.log(error.message);
    console.log("Not Connected");
})

};  


export default connectToMongoDB