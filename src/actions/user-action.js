  import axios from 'axios'
import {
        ALL_USER_FAIL,ALL_USER_REQUEST,ALL_USER_SUCCESS
  } from '../constants/user-constants'
  
  export const getAllUserAction=()=>async(dispatch)=>{
        try {
            dispatch({type:ALL_USER_REQUEST})
            const {data}=await axios.get("https://www.reddit.com/r/reactjs.json")
            dispatch({type:ALL_USER_SUCCESS,payload:data.data.children})
             
            console.log(data);
            
        } catch (error) {
            dispatch({type:ALL_USER_FAIL,payload:error})
        }
  }