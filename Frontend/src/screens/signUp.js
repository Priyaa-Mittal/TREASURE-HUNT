import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import {FaUser} from 'react-icons/fa';
import '../styling/user.css'
function SignUp() {
    const [data,setData]=useState({name:"",email:"",pswd:""})
    const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await fetch("http://localhost:8000/api/createUser",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({name:data.name, email:data.email, pswd:data.pswd})
            });
            const json= await response.json();
            console.log(json);
            if(!json.success){
                alert("Enter valid credentials.");
            }
            else{
                setData({name:"", email:"", pswd:""})
            }
    }
    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    return (
        
        <div className="bg">
            <div className='inline'>
                <Link to="/" className="bck"><FaArrowLeft style={{ color: 'white', marginRight: '5px' }} />Back</Link>
                <div className="heading">Sign Up Page</div>
                <div className='adminLogin' style={{color:"transparent"}}>....................</div>
            </div>
            <div className='box'>
                <form onSubmit={handleSubmit}>
                <div className='txt' style={{margin:'20px'}}><b>Hello User!!</b></div>
                    <div className="label">Username</div>
                    <input type="text" className="input" name='name' value={data.name} onChange={handleChange}></input><FaUser style={{ marginLeft: '-25px' }}/>

                    <div className="label">Email Id</div>
                    <input type="mail" className="input" name='email' value={data.email} onChange={handleChange}></input><MdEmail style={{ marginLeft: '-25px' }} />

                    <div className="label"> Password</div>
                    <input type="password" className="input" name='pswd' value={data.pswd} onChange={handleChange}></input><FaLock style={{ marginLeft: '-25px' }} /><br></br>

                    <button type="submit" className="loginbtn">Submit</button><br></br>
                    <Link to="/login" className='txt'>Already have an account? <b>Login</b></Link>
                </form>
            </div>
        </div>
    )
}
export default SignUp;
