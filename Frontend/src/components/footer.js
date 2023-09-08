import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../styling/footer.css';
function Footer() {

    return (
        <div className="footerstyle">
            <div className="footerinline">
                <div>
                    <div className="footerheading" >About Us</div>
                    <div className="footertxt" >We aim to let the users enjoy <br></br>the game of treasure hunt.</div>
                    <div className="footerheading" >Contact Us</div>
                    <div className="footertxt" >9988776655</div>
                    <div clsassName="footertxt" >Treasure@gmail.com</div>
                </div>
                <div>
                    <div className="footerheading" >Information</div>
                    <div className="footertxt" >About us</div>
                    <div className="footertxt" >More Search</div>
                    <div className="footertxt" >Blogs</div>
                    <div className="footertxt" >Testimonials</div>
                </div>
                <div>
                    <div className="footerheading">Helpful Links</div>
                    <div className="footertxt" >Services</div>
                    <div className="footertxt">Terms and onditions</div>
                    <div className="footertxt">Privacy Policy</div>
                </div>
            </div>
            <hr></hr>
            
            <div style={{textAlign:"center"}} className="respoIcons">
                <FaInstagram className="footericons one" />
                <FaWhatsapp className="footericons two" />
                <FaFacebook className="footericons three" />
                <FaYoutube className="footericons four" />
                <div className="footerbottom">@Copyright2023 All rights reserved.</div>
            </div>
        </div >
    )
}

export default Footer;