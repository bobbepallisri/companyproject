import React from 'react';
import { useNavigate } from 'react-router-dom';
import monkey from '../assets/monkey.png';
import './IntroScreen.css';

const IntroScreen = () => {
    const navigate = useNavigate();

    const startGame = () => {
        navigate('/instructions');
    };

    return (
        <div className="intro-screen">
            <img src={monkey} alt="Welcome Kiddo!" className="monkey-image" />
            <h1>Welcome to the Matching Game!</h1>
            <button onClick={startGame}>Start</button>
        </div>
    );
};

export default IntroScreen;
