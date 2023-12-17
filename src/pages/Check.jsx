import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Check() {
    const {id} =useParams()
    useEffect(()=>{
 axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            const cart = res.data}
            )
        },[id])
  return (
  
  <>
  <Navbar/>
      <div>Check</div>

  </>
  )
}
