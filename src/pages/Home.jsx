import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
export default function Home() {
    const[data ,setData]=useState([])
    const[search , setSearch] = useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data);
            setData(res.data)
        })
    },[])
const handelSearch =()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
        const result  = res.data.filter(item=>item.title.includes(search))
        setData(result)
    })
    
    
}
  return (<>
 
    <Navbar/>
    <div className='h-[100vh] w-[100vw] flex flex-col'>

<div className='flex justify-center items-center gap-2 bg-black/20'>
    <input className='p-5 rounded-lg' type="search" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
    <button onClick={handelSearch} className='bg-slate-200 px-3 py-1 rounded-lg' >Serach </button>
    
    </div>
      <div className='h-[100vh] w-[100vw] grid grid-cols-10 justify-center items-start mt-10  gap-2  '>
{data.map((item)=>( <div className='h-72 w-36 bg-white rounded-lg shadow-lg flex flex-col  justify-center gap-1 text-center' key={item.id}> 
    <img className='h-20' src={item.image}  />
    <p className='text-sm'>{item.title}</p>
    <p > Price: {item.price}</p>
 <Link to={`/details/${item.id}`}><button className='underline text to-blue-700'>View Details</button></Link>
   <Link to = '/'><button>Back</button></Link>
    </div>
))}

      </div>
</div>
  </>
  )
}
