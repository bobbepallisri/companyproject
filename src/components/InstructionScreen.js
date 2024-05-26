import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InstructionScreen.css';

const InstructionScreen = () => {
    const navigate = useNavigate();

    const goToGame = () => {
        navigate('/game');
    };

    return (
        <div className="instruction-screen">
            <h1>Instructions</h1>
            <p>Here are the instructions for the matching game...</p>
            <button onClick={goToGame}>Next</button>
        </div>
    );
};

export default InstructionScreen;
