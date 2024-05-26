import React from 'react';
import './Card.css';

const Card = ({ index, card, handleCardClick }) => {
    const handleClick = () => {
        if (!card.flipped) {
            handleCardClick(index);
        }
    };

    return (
        <div
            className={`card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
            style={{ backgroundColor: card.backgroundColor }}
            onClick={handleClick}
        >
            <div className="card-content">
                {card.flipped || card.matched ? card.value : '?'}
            </div>
        </div>
    );
};

export default Card;
