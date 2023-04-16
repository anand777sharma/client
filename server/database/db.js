 import mongoose from "mongoose";

export const Connection = async (URI) => {
     const URL = `${URI}`;
    try{
await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser:true});
console.log('Database connected Succesfully');
    }
    catch (error){
        console.log('error While Connecting with Detabase',error.message);

    }
}
export default Connection;