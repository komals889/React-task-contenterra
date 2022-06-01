 import {
     ALL_USER_FAIL,ALL_USER_REQUEST,ALL_USER_SUCCESS
 } from '../constants/user-constants'

 export const getAllUser=(state={reduxUser:[]},{type,payload})=>{
        switch (type) {
            case ALL_USER_REQUEST: return{reduxUser:[],isLoading:true};
            case ALL_USER_SUCCESS: return{reduxUser:payload};
            case ALL_USER_FAIL: return{reduxUserError:payload,isLoading:false};
        
            default:return state;
        }
 }