// BallGame.jsx
import React, { useState, useEffect } from 'react';
import './Animation.css';

const Animation = () => {
    const fieldWidth = 600;
    const fieldHeight = 400;
    const diameter = 100;
    const maxLeft = fieldWidth - diameter - 2;
    const maxTop = fieldHeight - diameter - 2;
    const vx = 5;
    const vy = 5;

    const [running, setRunning] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [ballImage, setBallImage] = useState('');

    const toggleRunning = () => {
        setRunning(!running);
    };

    const calculate = () => {
        setX((prevX) => {
            const newX = goRight ? prevX + vx : prevX - vx;
            if (newX >= maxLeft || newX <= 0) setGoRight(!goRight);
            return newX >= maxLeft ? maxLeft : newX <= 0 ? 0 : newX;
        });

        setY((prevY) => {
            const newY = goDown ? prevY + vy : prevY - vy;
            if (newY >= maxTop || newY <= 0) setGoDown(!goDown);
            return newY >= maxTop ? maxTop : newY <= 0 ? 0 : newY;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) calculate();
        }, 25);
        return () => clearInterval(interval);
    }, [running, goRight, goDown]);

    const changeBallImage = (url) => {
        setBallImage(url);
    };

    return (
        <div id="container">
            <div id="field" style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px` }}>
                <div
                    id="ball"
                    style={{
                        backgroundImage: `url(${ballImage})`,
                        left: `${x}px`,
                        top: `${y}px`,
                    }}
                ></div>
            </div>
            <div id="control">
                <button id="run" className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={toggleRunning}>
                    <span className={`bi ${running ? 'bi-pause' : 'bi-play'}`}> {running ? 'PAUSE' : 'RUN'}</span>
                </button>
                <button className="btn btn-primary" onClick={() => changeBallImage('./images/bast.png')}>BASKETBALL</button>
                <button className="btn btn-primary" onClick={() => changeBallImage('./images/fooi.png')}>FOOTBALL</button>
                <button className="btn btn-primary" onClick={() => changeBallImage('./images/voley.png')}>VOLLEYBALL</button>
                <button className="btn btn-primary" onClick={() => changeBallImage('./images/asia.png')}>ME</button>
            </div>
        </div>
    );
};

export default Animation;
