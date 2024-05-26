import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalScreen.css';

const FinalScreen = () => {
    const navigate = useNavigate();

    // Function to navigate back to the main screen (assuming '/' is your main route)
    const restartGame = () => {
        navigate('/');
    };

    return (
        <div className="final-screen">
            <h1>Congratulations!</h1>
            <p>You have matched all the cards. Great job!</p>
            <button onClick={restartGame}>Play Again</button>
        </div>
    );
};

export default FinalScreen;
