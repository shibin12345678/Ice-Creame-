import React from 'react'
import Main from './Component/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Component/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
