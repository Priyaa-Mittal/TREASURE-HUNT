import React from 'react';
import '../styling/hovering.css';
function Card(){
    // const gate=require('../images/gate.jpg')
    return(
        
        <div>
     
            <div className="card">
                <div>
                    <img src="https://thumbs.dreamstime.com/b/male-detective-puts-murder-weapon-bag-192252318.jpg" alt="sorry" className="img"></img> 
                </div>
                <div className='content'>
                    <div className="maintxt">Murder Mystery</div>
                    <div className='txt' style={{color:"rgb(175, 171, 171)"}}>Person is found dead in a room. Your task is to help the cops to find the evidences. Clues are give. Reading the clues you have to locate the mage in the room. So, GOOD LUCK!</div>
                </div>
            </div>


        </div>
    )
}
export default Card;