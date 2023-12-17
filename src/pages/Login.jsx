import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Login() {
    const[email , setEmail] =useState()
    const[password , setPassword] =useState()
const navg = useNavigate()
    const handelLogin = ()=>{
        if(email === "" || password === ""){
            alert('Enpty Inputes')
        }
        else{
            axios.get('https://6572e3a8192318b7db4135e3.mockapi.io/amazon')
            .then(res=>{
                let uesrs = res.data.find(user=>user.email == email && user.password == password)
if(!uesrs){
    alert('Invalid Email or Password')
}
 else{
    navg('/home')
     }               

               }
            )
             
        }
    }
  return (
<>
<Navbar/>
<div className='h-[100vh] w-[100vw] flex justify-center items-center'>
<div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-green-600/40">
    <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span class="text-[#d1ff47]">Amazon</span></div>
    <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
<div class="flex flex-col gap-3">
    
    <div class="block relative"> 
    <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"/>
    
    </div>
    <div class="block relative"> 
    <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>
    
    </div>

    <button onClick={handelLogin} type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

</div>
<div class="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <p class="text-sm text-[#7747ff]"> <Link to='/Signup'>Sign up for free!</Link></p></div>
</div>
</div>
</>
  )
}
