import axios from 'axios';

import * as actionTypes from '../constants/productConstant';

const URL ='http://localhost:8000';

export const  getProducts = ()=> async (dispatch)=>{
    try{
let {data} =await axios.get(`${URL}/products`);
dispatch({tupe:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }
    catch(error){
        console.log({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
    }
}  