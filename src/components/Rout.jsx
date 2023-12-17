import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Cart from '../pages/Cart'
import Eror from '../pages/Eror'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Index2 from '../pages/Index2'
import Check from '../pages/Check'
import Foot from './Foot'
export default function Rout() {
  return (<>
      

        <Routes>
        <Route exact path='/' element={<Index2/>} />

            <Route path='/home' element={<Home/>} />
            <Route path='/*' element={<Eror/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            
            <Route path='/details/:id' element={<Details/>} />
            <Route path='/cart/:id' element={<Cart/>} />
            <Route path='/check/:id' element={<Check/>} />
        </Routes>
<Foot/>
     

  </>
  )
}
