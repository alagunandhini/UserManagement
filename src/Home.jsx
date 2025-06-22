
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate=useNavigate();
    return(
        <>
       
         <h1 className='font-extrabold text-3xl text-center mb-3 mt-4  text-blue-800 py-2'> User Management</h1>
          <p className="text-gray-700 mb-10 text-center">
          Add, view, edit, and manage your users easily.
        </p>
    
    <div className='grid grid-cols-1 md:grid-cols-1 items-center justify-center px-'>

      <div className='flex justify-center items-center'>
        <img src="./img.jpg" className='w-full object-cover max-w-3xl h-auto '/>

      </div>

      <div className='flex justify-center items-center '>
        <button className='bg-blue-400 text-white p-3 rounded font-semibold m-7' onClick={()=> navigate('/form')}> Add Users </button>
        <button className='bg-blue-400 text-white p-3 rounded font-semibold m-7' onClick={()=> navigate('/userdetails')}> View user </button>
        
      </div>

    </div>
    
   

        
        </>
    )

}
export default Home