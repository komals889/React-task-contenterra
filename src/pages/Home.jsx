import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getAllUserAction } from '../actions/user-action';
export default function Home() {
const [users, setusers] = useState( [])
 
const dispatch=useDispatch()
const {reduxUser,isLoading} = useSelector(state=>state.users)
   useEffect(() => {
        const getUser=async()=>{
        dispatch(getAllUserAction())       
        }
        getUser()
   }, [ ])
   
    
 

  return <div className='container'>
          <div className="row mt-4">
              <div className="col-sm-10 offset-sm-1">

                  <div className='bg-dark text-warning'>
                    <h1 className='text-center p-3'>React Challenge</h1>
                  </div>

                <div className="row">
              {
               reduxUser?.map((item,index)=>(
                  <div className="col-sm-6" >
                    <div className="card" key={index}>
                      <div className="card-header bg-dark text-warning "><h5 className='card-title'>Title: {item.data.title}</h5></div>
                    <div className="card-body bg-dark  ">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ whiteSpace: "nowrap",
    overflow: "hidden"}}> <h5>SelfText:</h5> {item.data.selftext_html}</li>
                        <li className="list-group-item"> <h5>Score:</h5> {item.data.score}</li>
                        <li className="list-group-item"> <h5>Url:</h5>{item.data.url_overridden_by_dest}</li>
                      </ul>
                    </div>
                 </div><br />
              </div>
               ))
              }
              </div> 
              </div>
      </div>
  </div>;
}
