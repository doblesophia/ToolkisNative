import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const allCategories = createAsyncThunk("allCategories", async ()=>{
    try {
        const res = await axios.get("https://9hct66l5-8080.use.devtunnels.ms/subcategory")
        const category = await axios.get("https://9hct66l5-8080.use.devtunnels.ms/categories")
        
        return {sub:res.data.subCategory,category:category.data.category}
        
    } catch (error) {
        console.log(error);
    }
})

export default allCategories