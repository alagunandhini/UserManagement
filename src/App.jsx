import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import { Route, Routes, useNavigate } from 'react-router-dom'
import UserDetails from './Userdetails'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)
  const navigate =useNavigate();


  return (
    <>
         
  <Routes>
    <Route path='/' element={<Home/>}/>
  <Route path='/form' element={<Form/>}/>
   <Route path='/edit/:id' element={<Form/>}/>
  <Route path='/userdetails' element={<UserDetails/>}/>
</Routes>


      
    </>
  )
}

export default App
