import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ActivityScreen.css';
import Card from './Card';

const initialCards = [
    { id: 1, value: 'A', backgroundColor: 'red', set: 1, flipped: false, matched: false },
    { id: 2, value: 'B', backgroundColor: 'red', set: 1, flipped: false, matched: false },
    { id: 3, value: 'C', backgroundColor: 'red', set: 1, flipped: false, matched: false },
    { id: 4, value: 'D', backgroundColor: 'red', set: 1, flipped: false, matched: false },
    { id: 5, value: 'A', backgroundColor: 'blue', set: 2, flipped: false, matched: false },
    { id: 6, value: 'B', backgroundColor: 'blue', set: 2, flipped: false, matched: false },
    { id: 7, value: 'C', backgroundColor: 'blue', set: 2, flipped: false, matched: false },
    { id: 8, value: 'D', backgroundColor: 'blue', set: 2, flipped: false, matched: false }
];

const shuffleCards = (cards) => {
    let shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const ActivityScreen = () => {
    const [cards, setCards] = useState(shuffleCards(initialCards));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matches, setMatches] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [first, second] = flippedCards;
            if (cards[first].value === cards[second].value && cards[first].set !== cards[second].set) {
                const newCards = cards.map((card, index) => (
                    index === first || index === second ? { ...card, matched: true } : card
                ));
                setCards(newCards);
                setMatches(matches + 1);
            }
            setTimeout(() => {
                setFlippedCards([]);
            }, 1000);
        }
    }, [flippedCards, cards, matches]);

    useEffect(() => {
        if (matches === initialCards.length / 2) {
            navigate('/final');
        }
    }, [matches, navigate]);

    const handleCardClick = (index) => {
        if (flippedCards.length < 2 && !cards[index].flipped) {
            const newCards = cards.map((card, i) => (
                i === index ? { ...card, flipped: true } : card
            ));
            setCards(newCards);
            setFlippedCards([...flippedCards, index]);
        }
    };

    return (
        <div className="activity-screen">
            <div className="card-grid">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        index={index}
                        card={card}
                        handleCardClick={handleCardClick}
                    />
                ))}
            </div>
            <div className="match-count">
                Matches: {matches}
            </div>
        </div>
    );
};

export default ActivityScreen;
