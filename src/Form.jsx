import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
const Form =()=>{
    const [form,setForm]=useState({name:'',email:'',dob:''}); // to store name ,emi,dob . how we acess? we use like form.name , form.email
    const [showform,setShowForm]=useState(true); // to show or hide form 
    const navigate =useNavigate();

    const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value}) // copy the values to form , eg name: alagu copy to form other email,DOB remain same 
    }
    //submit handling function
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const {name,email,dob}=form; //store form's name,email,dob to the variable
       
        if(!name||!email||!dob){
            alert('pls enter all fields'); //if someone miss then it will show alert
            return;
    }

    try{
        await axios.post('http://localhost:9000/users',{ name,email,dob:new Date(dob),}) // post tha data to DB 

    alert('User Added Sucessfully') //after succefull completion it show msg
    const addMore=window.confirm("want to add more Users?")
    if(addMore){
        setForm({name:'',email:'',dob:''}) // clear all fields

    }
    else {
        setShowForm(false) // to hide the form 
    }}

    catch(e){
        console.log(e);
        alert('Something went wrong while saving !')
    }}

    if(!showform){
        return(
            <>
            <div className="flex justify-center"> 
                <button className="bg-sky-600 p-5 text-white rounded-lg " onClick={()=>navigate('/userdetails')}>View UserDetails</button>
            </div>
            </>
        )

    }
    console.log(form)

    return(
        <>
        <div className=" flex justify-center items-center ">
            <form className="border border-lg border-sky-500 p-3 rounded-md" onSubmit={handleSubmit}> 
                <h1 className="font-bold text-center mb-5">ADD USERS</h1>
            {/* row 1 */}
            <div className="mb-4">
                 <label className="text-sky-900 p-1"> Name: </label>
                    <input type="text"name="name" value={form.name} className="border" onChange={handleChange}/>
                
                </div>    

            {/* row 2 */}
            <div className="mb-4">
                 <label className="text-sky-900 p-1"> Email: </label>
                    <input type="email" name="email" value={form.email} className="border ms-1" onChange={handleChange} />
                
                </div>    

              {/* row 3 */}
            <div className="mb-4">
                 <label className="text-sky-900 p-2">DOB:  </label>
                    <input type="date"  name="dob" value={form.dob} className="border" onChange={handleChange} />
                
                </div>  
            <div className="flex justify-center">
               <button className="btn bg-sky-600 text-white px-3 py-2 text-center rounded" type="submit">Submit</button>
           
            </div>

           


        </form>


        </div>
  
        </>
    )

}
export default Form