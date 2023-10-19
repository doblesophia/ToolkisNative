import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const allProducts = createAsyncThunk('allProducts', async ()=>{
    try {
        const res = await axios.get("https://9hct66l5-8080.use.devtunnels.ms/products")
        
        return res.data

        

    } catch (error) {
        console.log(error, "error")
    }
}) 

export default allProducts