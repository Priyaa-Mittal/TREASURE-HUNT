import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styling/home.css';
function About() {
    const mystyle={
        color:"white",
        paddingTop:"130px",
        marginLeft:'50px',
        marginRight:'50px',
        marginBottom:"128px",
        fontSize:"20px",
        textAlign:"justify",
        fontFamily:"Dancing Script"
    }
    return (
        <div className="homebg">
            <Navbar/>
            <div style={mystyle}>
                Mastermind Treasure Hunts creates events that are fun, challenging, and build a shared sense of excitement that’s hard to beat.
                We are committed to the moment of discovery, to the thrill of the chase, to the almost audible click that happens when you make the shift from confusion to clarity, and what seemed an impenetrable riddle becomes a clear set of directions. It’s the moment when someone suddenly says, “I’ve got it”.
                Our Hunts are located in the San Francisco Bay Area, Sacramento, San Diego, and the surrounding counties.  We are always looking for opportunities to create hunts farther afield.  Please contact us if you have a suggestion or would like us to create a hunt in your area.
                Think Fast. Play Together. Have Fun.
                Mastermind Treasure Hunts creates events that are fun, challenging, and build a shared sense of excitement that’s hard to beat.
                We are committed to the moment of discovery, to the thrill of the chase, to the almost audible click that happens when you make the shift from confusion to clarity, and what seemed an impenetrable riddle becomes a clear set of directions. It’s the moment when someone suddenly says, “I’ve got it”.
                Our Hunts are located in the San Francisco Bay Area, Sacramento, San Diego, and the surrounding counties.  We are always looking for opportunities to create hunts farther afield.  Please contact us if you have a suggestion or would like us to create a hunt in your area.
                Think Fast. Play Together. Have Fun.
            </div>
            <Footer />
        </div>
    )
}
export default About;