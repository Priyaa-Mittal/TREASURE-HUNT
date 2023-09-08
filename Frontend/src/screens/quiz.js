import React from 'react';
const Quiz = ({ showQuiz,question, quiz }) => {
    return (
        
        <div style={{display:`${showQuiz?'block':'none'}`}}>
            <div style={{textAlign: 'center'}}>{quiz?.indexOf(question) + 1}/{quiz?.length}</div>
            <h5>{question?.ques}</h5>
        </div>
    )
}
export default Quiz;