import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import  axios  from "axios";
const Form =()=>{
    const [form,setForm]=useState({name:'',email:'',dob:''}); // to store name ,emi,dob . how we acess? we use like form.name , form.email
    const [showform,setShowForm]=useState(true); // to show or hide form 
    const navigate =useNavigate();
    const location=useLocation();
    const {id}=useParams(); //get the url id (if it navigate through edit/:id)
    const editUser=location.state // get the entire user details (when in edit mode)
    
    //to pre-fill the all details when we edit
    useEffect(()=>{
        if(editUser){
            setForm(editUser)
        }
    },[editUser])

    //to get the user entered
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
// if id have then update the data to DB else save the data to DB
    try{
        if(id){
            await axios.put(`http://localhost:9000/users/${id}`,{name,email,dob:new Date(dob)})
            alert("User Upadated");
            navigate('/userdetails')
        }
        else{
        await axios.post('http://localhost:9000/users',{ name,email,dob:new Date(dob),}) // post tha data to DB 

    alert('User Added Sucessfully') //after succefull completion it show msg
    const addMore=window.confirm("want to add more Users?")
    if(addMore){
        setForm({name:'',email:'',dob:''}) // clear all fields

    }
    else {
        navigate('/')// navigate to home
    }}}

    catch(e){
        console.log(e);
        alert('Something went wrong while saving ! or check Your email  ')
    }}


  
    console.log(form)

    return(
        <>

        <div className=" flex flex-col justify-center items-center min-h-[90vh] bg-white px-4 ">
          
            <form className="w-full  max-w-xl border border-lg border-sky-500 p-8 rounded-md shadow-lg bg-white" onSubmit={handleSubmit}> 
                <h1 className="font-bold text-3xl text-center mb-4 text-blue-800">{id?"Edit User": "Add User"}</h1>
            {/* row 1 */}
            <div className="mb-6">
                 <label className=" block text-sky-900 mb-2 font-medium"> Name: </label>
                    <input type="text"name="name" value={form.name}    placeholder="Enter name" className="outline-none p-3 w-full bg-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 " onChange={handleChange}/>
                
                </div>    

            {/* row 2 */}
            <div className="mb-6">
                 <label className="block text-sky-900 mb-2 font-medium"> Email: </label>
                    <input type="email" name="email" value={form.email}    placeholder="Enter your email" className="outline-none p-3 w-full bg-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 " onChange={handleChange} />
                
                </div>    

              {/* row 3 */}
            <div className="mb-8">
                 <label className="block text-sky-900 mb-2 font-medium">DOB:  </label>
                    <input type="date"  name="dob" value={form.dob}     className="outline-none p-3 w-full bg-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 " onChange={handleChange} />
                
                </div>  
            <div className="flex justify-center">
               <button className="w-full bg-blue-400 hover:bg-blue-500 text-white px-5 py-3 text-center rounded cursor-pointer" type="submit">{id? "Update":"Submit"}</button>
           
            </div>

           


        </form>
           

        </div>
           <div className="flex justify-start items-start bg-white mt-5">
                        <button className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 shadow rounded mx-4  " onClick={()=>navigate('/')}> Back</button>
            </div>


  
        </>
    )

}
export default Form