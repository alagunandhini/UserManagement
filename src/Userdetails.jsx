import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
import Form from "./Form";

const UserDetails=()=>{
    const [users,setUsers]=useState([]); // array to store data
    const navigate=useNavigate(); // for navigation
   // to fetxh all user data when page loads
    useEffect(()=>{
        axios.get("http://localhost:9000/users")
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
            await axios.delete(`http://localhost:9000/users/${id}`);
            window.location.reload();
        }

    }
    return(
        <>
        <div>
            <h1 className="font-bold text-2xl text-center mt-5 mb-10">Users Table</h1>
            <table className="w-full border mb-10 ">
                <thead> 
                    <tr className="bg-sky-300 text-white ">
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
                          <th className="border">{user.dob}</th>
                          <th className="border"><button className=" text-sky-500 p-2 rounded-full shadow"
                                      onClick={()=>navigate(`/edit/${user.id}`,{state:user})} >✔ </button></th>

                           <th className="border"><button className="text-red-400  px-4 py-2 rounded-full shadow"
                                      onClick={()=>handleDelete(user.id)}> ✘</button></th>
                          
                       
                    </tr>
                    )

                    )}


                </tbody>


            </table>
        </div>

<div className=" flex justify-center">
    <button className="bg-sky-500 p-3 rounded-full w-70 text-white text-lg font-bold" onClick={()=> navigate('/')}> Add User</button>

</div>
        

        </>
    )
}
export default UserDetails;