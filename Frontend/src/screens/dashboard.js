import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/dashboard.css'
function Dash() {
    var [avg, setAvg] = useState(0);
    const [arr, setArr] = useState([]);
    const logo = require('../images/treasure.png');
    const pie = require('../images/pie.png');
    const map = require('../images/images.png');
    const lines = require('../images/lines.png');

    useEffect(() => {
        const Data = async () => {
            const response = await fetch("http://localhost:8000/api/dashboard", {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify()
            })
            const json = await response.json();
            console.log(json);

            setArr(json.data);
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i].score;
            }
            setAvg(Math.floor(sum / arr.length));
        }
        Data();
    }, [arr])
    return (
        <div style={{ backgroundColor: "black" }}>

            <div className='inline'>
                <div><img src={logo} alt="sorry" className="logo"></img></div>
                <div className='Dashheading'>Treasure Hunt Dashboard</div>
                <Link to="/login" className='backjao'>Back</Link>
            </div>
            <div className='inline'>
                <img src={lines} alt="sorry" className='linesimage'></img>
                <div className="reportback nameBar">Worldwide Status
                    <img src={map} style={{ width: "280px" }} alt="sorry"></img></div>
            </div>
            <div className="inline">
                <div className="reportback users">
                    <div className='total'>Users</div>
                    <div className='inline'>
                        <div>{arr?.map((item, index) => <div className="table" key={index}>{index + 1}</div>)}</div>
                        <div>{arr?.map((item, index) => <div className="table" key={index}>{item.name}</div>)}</div>
                        <div>{arr?.map((item, index) => <div className="table" key={index}>{item.score}</div>)}</div>
                        <div>{arr?.map((item, index) => <div className="table" key={index}>{item.email}</div>)}</div>
                    </div>
                </div>
                <div className='reportback count'>
                    <img src={pie} style={{ marginLeft: "-32px" }} alt="sorry"></img>
                    <div className="total">Total users: {arr.length} </div>
                </div>
                <div className='reportback average'>
                    <img src={pie} style={{ marginLeft: "-32px" }} alt="sorry"></img>
                    <div className="total">Average Score: {avg} </div>
                </div>
            </div>
        </div>
    )
}
export default Dash;
