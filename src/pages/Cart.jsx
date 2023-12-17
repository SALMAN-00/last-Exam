import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Cart() {
  const [data , setData] =useState([])

  useEffect(()=>{
    axios.get(`https://6572e3a8192318b7db4135e3.mockapi.io/amazon`)
    .then(res=>{
      console.log(res.data),
setData(res.data)
    })
  },[id])
  return (<>
 <Navbar/>
    <div className='h-[100vh] w-[100vw] bg-slate-200'>

<div>
<div className=' flex flex-col gap-3'>
    <p>{data.title}</p>
    <p>{data.description}</p>
    <p > Price: {data.price}</p>
    <Link to ={`/check/${data.id}`}><button>Checkout</button></Link>

/</div>
 </div>


    </div>
</>  ) 
}
