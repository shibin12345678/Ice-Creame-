import React from 'react'
import Main from './Component/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Component/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarmenu from './Component/Menu/Navbarmenu';
import IceCreameBars from './Component/Menu/All/IceCreameBars/IceCreameBars';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/allproduct' element={<Navbarmenu/>}></Route>
        <Route path='/icecreamebars' element={<IceCreameBars/>}></Route>
      
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
