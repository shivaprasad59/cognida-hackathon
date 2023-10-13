import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from './frontend/Landing/Landing'
import Navbar from './frontend/NavBar/Navbar.tsx'
import Filter from './frontend/Components/Filters/Filter.tsx'
import Cart from './frontend/Cart/Cart'
import Home from './frontend/Home/Home'
import Account from './frontend/Account/Account'
import Sample from './frontend/Sample'
import Copyright from './frontend/Components/Footer/Copyright'
const App = () => {
  
  
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Dashboard' element={<Navbar />}/>
        <Route path='/shopping' element={<Filter  />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/sample' element={<Sample/>}/>
      </Routes>
    </div>
  )
}

export default App