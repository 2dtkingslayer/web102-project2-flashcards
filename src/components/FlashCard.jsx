import React, { useState, useEffect } from "react";
import '../styles/FlashCard.css';

const FlashCard = ({ flashcard, isFrontShown, isChanged }) => {
    // State variable for the front and back of the flashcard
    const [isShown, setIsShown] = useState(isFrontShown);

    const toggleFlashCard = () => {
        setIsShown(!isShown);
    };

    useEffect(() => { // Front face is shown by default
        if (isChanged) {
            setIsShown(true);
        }
    }, [isChanged]);

    let imageName = `../src/assets/${flashcard.image}`;
    let imageLogo = `../src/assets/logos/${flashcard.image}`;

    return (
        <div className={`flip-flashcard ${isShown ? '' : 'flipped'}`} onClick={toggleFlashCard}>
            <div className="inner">
                <div className={`front ${flashcard.player ? '' : "logo"}`} >
                    {flashcard.player ? (
                        <>
                            <h3>Who is this player?</h3>
                            <img src={imageName} alt={flashcard.player} className="flashcard-thumbnail"/>
                        </>
                    ) : (
                        <>
                            <h3>What team is this?</h3>
                            <img src={imageLogo} alt={flashcard.club} className="flashcard-thumbnail-logo"/>
                        </>
                    )}
                </div>
                <div className="back" >
                    {flashcard.player ? (
                        <h1>{flashcard.player}</h1>
                    ) : (
                        <h1>{flashcard.club}</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashCard;