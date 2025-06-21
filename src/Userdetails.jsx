import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
import Form from "./Form";

const UserDetails=()=>{
    const navigate=useNavigate();
    return(
        <>
        <button className="bg-sky-500 p-5 rounded" onClick={()=> navigate('/')}> Add User</button>

        </>
    )
}
export default UserDetails;