import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const AddAPi=createAsyncThunk('users/CreateUser',async(data)=>{
    console.log(data,"reached to redux")
    let res=await axios(
        {
            method: 'post',
            url: 'http://localhost:8080/user',
            // headers: { 
            //   'Accept': 'application/json', 
            //   'Authorization': 'Bearer 200|9t1dGcLeRhiaD15Hkh0UGEEefXKKsFVDccMdX82t', 
            //   'Content-Type': 'application/json'
            // },
            data : data
          }
          
    )
    return res.data
})
export const AddSlice=createSlice({
    name:'Create',
    initialState:{
        allUsers:[],
        loading:false,
        error:true
    },
    extraReducers:{
        [AddAPi.pending]:(state)=>{
            state.loading=true
        },
        [AddAPi.fulfilled]:(state,{payload})=>{
            state.loading=false
        },
        [AddAPi.rejected]:(state)=>{
            state.error=true
        }
    }
})
export default AddSlice.reducer;