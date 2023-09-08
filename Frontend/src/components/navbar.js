import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import '../styling/navbar.css';
function Navbar() {
    const navigate = useNavigate();


    const handleLogOut = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    return (

        <div className="mystyle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfu4OmxTznTnctKq9vuGVmXORZR1PxJZlVDQ&usqp=CAU" alt="sorry" className="logo"></img>
            <div><div className="headingStyle">Treasure Hunt</div>
                <div className="line">Lets play with mind.</div>
            </div>

            <div className="flexRow">
                <Link to="/about" className="tabs">About</Link>
                {(localStorage.getItem("authToken")) ?
                    <div className="tabs" onClick={handleLogOut}><BiLogOutCircle />LogOut</div> :
                    <div style={{ marginTop: "20px" }}>
                        <FaUserCircle style={{ marginRight: "-10px", color: "white" }} /><Link to="/signup" className="tabs1">SignUp</Link>
                        <BiLogInCircle style={{ marginRight: "-15px", color: "white" }} /><Link to="/login" className="tabs1">Login</Link>


                    </div>
                }
            </div>
 
        </div>
    )
}
export default Navbar;