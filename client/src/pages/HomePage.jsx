import React, {useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout';

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
    <Layout>HomePage</Layout>
  )
}

export default HomePage