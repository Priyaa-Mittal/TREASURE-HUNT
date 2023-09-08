import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Card from '../components/card';
import Footer from '../components/footer';
import '../styling/home.css';
function Home() {
    const [arr, setArr] = useState();
    const loadData = async () => {
        let response = await fetch("http://localhost:8000/api/leaderboard", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        console.log(json);
        setArr(json.data);
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <div className='homebg'>
            <Navbar />
            <div className="cards">
                <div className='left' style={{height:"400px", textDecoration: 'none' }}>
                    {(localStorage.getItem("authToken")) ?
                        <Link to="/card1"  style={{textDecoration: 'none'}}><Card/></Link> : <Link to="/login"><Card /></Link>
                    }
                    {(localStorage.getItem("authToken")) ?
                        <Link to="/card1" style={{ textDecoration: 'none' }}><Card /></Link> : <Link to="/login"><Card /></Link>
                    }

                </div>
                <div className='right'>
                    <div style={{ marginTop: "150px", fontSize: "30px", fontFamily: "sofia", color: "white", marginLeft: "10px" }}>Leaderboard</div>
                    <div className="leaderboard" >
                        <div> {arr?.map((item, index) =>
                            <div className="table" key={index}>{item.name}</div>)
                        }</div>
                        <div>{arr?.map((item, index) =>
                            <div className="table" key={index}>{item.score}</div>)
                        }</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;

