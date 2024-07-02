import React, {useEffect} from 'react'
import axios from 'axios'

const HomePage = () => {

  const getUserData=async(req,res)=>{
    try {
      const res=await axios.post("/api/user/getUserData",
      {},
      {
        headers:{
          Authorization:"Bearer" + localStorage.getItem("token"),
        },
      }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getUserData();
  },[]);
  return (
    <div>HomePage</div>
  )
}

export default HomePage