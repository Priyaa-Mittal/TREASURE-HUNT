import React from 'react';
const Result=({showresult,score})=>{
    return(
        <div style={{display:`${showresult?'block':'none'}`, marginTop:'40px', textAlign:'center'}}>
            You Have Scored {score}/50;
            <div style={{marginTop:'20px', marginLeft:'-20px'}}>{score<50?"Better luck next time":"Congratulations, You have won a treasure"}</div>
        </div>
    )
}
export default Result;