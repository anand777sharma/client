 import mongoose from "mongoose";

export const Connection = async (username,password) => {
    // const URL = `mongodb+srv://${username}:${password}@cluster0.82p5mzf.mongodb.net/ecommerce?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://anand:anand123@cluster0.82p5mzf.mongodb.net/ecommerce?retryWrites=true&w=majority`;
    try{
await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser:true});
console.log('Database connected Succesfully');
    }
    catch (error){
        console.log('error While Connecting with Detabase',error.message);

    }
}
export default Connection;