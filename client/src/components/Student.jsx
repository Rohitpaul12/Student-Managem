import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
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
    (<div>
        <div className="roll">{data.roll}</div>
        <div className="name">{data.name}</div>
        <div className="email">{data.email}</div>
        <div className="contact">{data.contact}</div>
        <div className="address">{data.address}</div>
        <div className="gender">{data.gender}</div>
    </div>
    ):
    (<div>loading</div>)
  )
}
