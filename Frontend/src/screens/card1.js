import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import Quiz from './quiz';
import Result from './result';
import "../styling/card.css";
import Footer from '../components/footer';
function Card1() {

    let treasure = require('../images/treasure.png');
    let quesbg = require('../images/00001.png');

    const [quiz, setQuiz] = useState([]);
    const [question, setQuestion] = useState({});
    const [flip, setFlip] = useState(false);
    const [score, setScore] = useState(0);
    const [attempt, setAttempt] = useState(8);
    const [cnt, setCnt] = useState(0);
    const [showresult, setShowResult] = useState(false);
    const [showQuiz, setShowQuiz] = useState(true);
    const [content, setContent] = useState(true);
    const [showbtn, setShowbtn] = useState(true);

    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('05:30');
    console.log(content)

    const updatescore = async (score) => {
        
        const mail = localStorage.getItem("userEmail");
        console.log(mail);
        const response = await fetch("http://localhost:8000/api/updateUser", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ email:mail, score:score }),
        })
        console.log("response", response)
        const json = await response.json();
        console.log("json", json);
        if (!json.statusText) {
            console.log("error in updation");
        }
        else {
            console.log("successfully updated");
        }
    }

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        // const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                // (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {
        setTimer('05:30');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 330);
        // deadline.setMinutes(deadline.getMinutes()+ 60);
        return deadline;
    }
    const stopTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 0);
    }




    const checkImage = () => {
        if (attempt === 1) {
            setShowQuiz(false);
            setShowResult(true);
            setContent(false);
            clearTimer(stopTime());
        }
        if (attempt > 0) {
            setAttempt(attempt - 1);

        }

    }
    const find = async (e) => {
        setShowQuiz(false);
        setShowResult(true);
        setContent(false);
        setShowbtn(false);
        clearTimer(stopTime());
        setAttempt(0);
        updatescore(score);
    }

    const refresh = () => window.location.reload(true)

    const map = () => {
        if (score < 50 && attempt > 0) {
            setScore(score + 10);
            setCnt(cnt + 1);
            setFlip(!flip);
            setAttempt(attempt - 1);
        }
        else{
            find();
        }
    }
    // Fetching data of riddles

    useEffect(() => {
        fetch('riddles.json')
            .then(res => res.json())
            .then(data => setQuiz(data))
    }, [quiz]);


    //   Set single question

    useEffect(() => {
        if (quiz.length > cnt) {
            setQuestion(quiz[cnt]);
        }
    }, [quiz, cnt])

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


    useEffect(() => {
        if (timer === '00:00') {
            setShowQuiz(false);
            setShowResult(true);
            setContent(false);
            setShowbtn(false);
            updatescore(score);
        }
    }, [timer])


    return (

        <div className="homebg">

            {/* Navbar code */}
            <div className="mystyle">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfu4OmxTznTnctKq9vuGVmXORZR1PxJZlVDQ&usqp=CAU" className="logo" alt="sorry"></img>
                <div><div className="headingStyle">Treasure Hunt</div>
                    <div className="line">Lets play with mind.</div>
                </div>

                <div className="cardflexRow">
                    <Link to="/" className="tabs">Home</Link>
                    <Link to="/about" className="tabs hide">About</Link>
                </div>
            </div>


            {/* body Code */}
            <div className="flexing" style={{ paddingTop: "80px" }}>
                <div className="tabs sofia">Attempts Left: {attempt}</div>
                <div className="tabs sofia font-effect-fire">Score: {score}</div>
                <div className="tabs sofia">Timer: {timer}</div>
                <div ><button onClick={refresh} className="tabs sofia font-effect-fire" style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Restart</button></div>
            </div>

            <div className="cardflexRow2">
                <div><img src={treasure} alt="sorry" className="treasure" usemap="#image-map" onClick={checkImage}></img>
                    <map name="image-map">
                        <area coords="379,313,357,268,370,265,371,265,392,305" shape="poly" onClick={map} alt=""></area>
                        <area coords="110,159,36" shape="circle" onClick={map} alt=""></area>
                        <area coords="211,191,224,187,236,202,238,217,234,227,230,232,223,230,212,225,207,210" shape="poly" onClick={map} alt=""></area>
                        <area coords="114,37,128,35,136,40,140,52,138,61,135,71,125,73,114,73,108,66,106,52" shape="poly" onClick={map} alt=""></area>
                        <area coords="437,259,453,259,453,267,455,275,448,282,434,282,429,270" shape="poly" onClick={map} alt=""></area>
                    </map>
                </div>
                <div className="showresBox">
                    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                        <div>
                            <img src={quesbg}
                                className="quesBox" alt="sorry" ></img>

                            <div className="ques"><Quiz showQuiz={showQuiz} question={question} quiz={quiz} />

                                <Result showresult={showresult} score={score} />
                                <button onClick={find} showbtn={showbtn} className="btn">Submit</button>
                            </div>

                        </div>
                        <div>
                            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/10/Resident-Evil-4-Remake-Church.jpg" className="quesBox" alt="sorry"></img>

                            <div className="unlock">
                                <button onClick={() => setFlip(!flip)} className="unlockbtn"><div>Unlock next clue</div></button>

                            </div>
                        </div>


                    </ReactCardFlip>

                </div>
            </div>
            <div className="altText">NOTE: Need to enter full screen mode to play the game</div>
            <Footer />
        </div>
    )
}
export default Card1;
