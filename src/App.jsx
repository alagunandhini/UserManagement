import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './Userdetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-sky-400 grid grid-cols-2 m-0'>

      {/* User form */}
      <div className='px-5 py-2 flex justify-center border border-white'>
        <h1 className='font-bold text-3xl text-white'>User Form </h1>
        
          </div>
        

{/* User details */}
<div className='px-5 py-2 border border-white flex justify-center'>
  <h1 className='font-bold text-3xl text-white' > User Details</h1>

</div>
</div>
<Routes>
  <Route path='/' element={<Form/>}/>
  <Route path='/userdetails' element={<UserDetails/>}/>
</Routes>

      
    </>
  )
}

export default App
