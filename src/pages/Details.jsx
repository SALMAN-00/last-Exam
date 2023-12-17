import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Details() {
   const {id} = useParams()
    const[data ,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            console.log(res.data);
            setData(res.data)
        })
    },[id])

    const handelCart =(id)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            const cart = res.data
            console.log(cart);

axios.put(`https://6572e3a8192318b7db4135e3.mockapi.io/amazon`,{
    cart:cart
})
.then( alert('added to cart'))
    }

        )
}
  return ( <>
  <Navbar/>
      <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
     <div className=''><img className='h-96' src={data.image}  />
        </div> 
        <div className=' flex flex-col gap-3'>
    <p>{data.title}</p>
    <p>{data.description}</p>
    <p > Price: {data.price}</p>
    <div className='flex gap-5'>
<button onClick={ e=>handelCart(data.id)}>add to card</button>
   <Link to='/home'><button>Back</button></Link>
     </div>
      </div>
</div>
  </>
  )
}
