import {products} from './constants/product.js';
import Product from './model/product-schema.js';

const DefaultData=async()=>{
    try{
await Product.insertMany(products);
console.log('Data imported Successfully');
    }
    catch(error){
        console.log('error while inserting Default data',error.message);
    }
}
export default DefaultData;