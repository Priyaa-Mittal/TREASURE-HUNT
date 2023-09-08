import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import '../styling/user.css'
function Login() {


    const [data, setData] = useState({ email: "", pswd: "" });
    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: data.email, pswd: data.pswd })
        })
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials");
        }
        else {
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail",data.email);
            console.log(localStorage.getItem("authToken"));
            navigate("/")
        }
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const dashboard=()=>{
        if(data.email==="priya@gmail.com" && data.pswd==="priya123"){
            navigate('/dashboard');
        }
        else{
            alert("Enter valid details");
        }
    }

    return (

        <div className="bg">
            <div className='inline'>
                <Link to="/" className="bck"><FaArrowLeft style={{ color: 'white', marginRight: '5px' }} />Back</Link>
                <div className='heading' >Login page</div>
                <button onClick={dashboard} className='adminLogin' >Login as Admin</button>
            </div>
            <form onSubmit={handleSubmit} className="box">
                <div className='txt' style={{margin:'20px'}}><b>Welcome Back!!</b></div>
                <div className="label">Email</div>
                <input type="text" className="input" name='email' value={data.name} onChange={handleChange}></input><MdEmail style={{ marginLeft: '-25px' }} />

                <div className="label"> Password</div>
                <input type="password" className="input" name='pswd' value={data.pswd} onChange={handleChange}></input><FaLock style={{ marginLeft: '-25px' }} /><br></br>

                <div className='inline1'>
                    <input type="checkbox" style={{ height: '12px', width: '12px' }} ></input>
                    <div style={{ fontSize: '13px' }}>Remember me</div>
                    <div style={{ fontSize: '13px' }}>Forget Password?</div>
                </div>

                <button type="submit" className="loginbtn">Login</button><br></br>
                
                <Link to="/signUp" className='txt'>Don't have an account? <b>Register</b></Link>
            </form>
        </div >

    )
}
export default Login;
