import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
import Form from "./Form";

const UserDetails=()=>{
    const [users,setUsers]=useState([]); // array to store data
    const navigate=useNavigate(); // for navigation
   // to fetxh all user data when page loads
    useEffect(()=>{
        axios.get("https://usermanagement-5.onrender.com/users")
        .then((res)=>{
            setUsers(res.data);
        })

        .catch((err)=>{
            console.error(err);
        })

    },[])

    //handle delete function
    const handleDelete = async (id)=>{
        const del=window.confirm("are you sure to delete?")
        if(del){
            await axios.delete(`https://usermanagement-5.onrender.com/users/${id}`);
            window.location.reload();
        }

    }
    return(
        <>
       
            <h1 className="font-extrabold text-2xl text-center  mb-3  text-blue-900 rounded-full mt-3">Users details</h1>
              <p className="text-gray-700 mb-10 text-center">
          Edit ,delete and manage your users easily.
        </p>

            <table className="w-full border mb-10 ">
                <thead> 
                    <tr className="bg-blue-400 text-white ">
                        <th className="border p-3">Id</th>
                         <th className="border">Name </th>
                          <th className="border">email</th>
                           <th className="border">DOB</th>
                           <th className="border">Update</th>
                           <th className="border">delete</th>
                           

                    </tr>
                </thead>
                <tbody>
                    {users.map((user,id)=>(
                        <tr key={id} className=" text-gray-600  ">
                        <th className="border p-4">{id+1}</th>
                        <th className="border">{user.name}</th>
                         <th className="border">{user.email}</th>
                          <th className="border">{new Date(user.dob).toLocaleDateString()}</th>
                          <th className="border"><button className=" text-sky-500 p-2 rounded-full shadow"
                                      onClick={()=>navigate(`/edit/${user.id}`,{state:user})} >✔ </button></th>

                           <th className="border"><button className="text-red-400  px-4 py-2 rounded-full shadow"
                                      onClick={()=>handleDelete(user.id)}> ✘</button></th>
                          
                       
                    </tr>
                    )

                    )}


                </tbody>


            </table>
       

<div className=" flex justify-center gap-5">
    <button className="bg-blue-400 hover:bg-blue-500  py-3 px-5 rounded text-white text-md font-semibold" onClick={()=> navigate('/form')}> Add User</button>
      <button className="bg-blue-400 hover:bg-blue-500 text-white px-9 rounded shadow font-semibold " onClick={()=>navigate('/')}> Back</button>

</div>



      
       
      
        

        </>
    )
}
export default UserDetails;