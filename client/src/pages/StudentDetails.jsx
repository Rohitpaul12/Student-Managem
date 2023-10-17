import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function StudentDetails() {
    let { id } = useParams();
    const [data,setData] = useState();

    async function fetchStudent(){
        console.log(id);
        try {
            await axios.get(`http://localhost:4000/student/${id}`)
            .then((response)=>{
                setData(response.data)
            })
        } catch (error) {
            console.log({error:error});
        }
    }
useEffect(()=>{
    fetchStudent()
},[])
useEffect(()=>{
    console.log(data);
},[data])

  return (
    data ? 
    (<div className='view-student'>
        <div className="roll">Roll.No:<span>{data.roll}</span></div>
        <div className="name"> Name:<span>{data.name}</span></div>
        <div className="email">Email:<span>{data.email}</span></div>
        <div className="contact">Contact:<span>{data.contact}</span></div>
        <div className="address">Address:<span>{data.address}</span></div>
        <div className="gender">Gender:<span>{data.gender}</span></div>
    </div>
    ):
    (<div>loading</div>)
  )
}
