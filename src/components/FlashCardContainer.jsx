import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import flashcards from '../../public/database.json';

const FlashcardContainer = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [prevCardIndex, setPrevCardIndex] = useState(-1); // Initialize with -1

    useEffect(() => { // Update the prev card idx when the current card idx changes
        setPrevCardIndex(currentCardIndex);
    }, [currentCardIndex]);

    const getNextFlashCard = () => {
        let nextIndex = getRandomIndex();
        while (nextIndex === currentCardIndex) {
            nextIndex = getRandomIndex(); // Next random idx must be different
        }
        setCurrentCardIndex(nextIndex);
    };

    const getRandomIndex = () => {
        return Math.floor(Math.random() * flashcards.length);
    };

    // Check if the current card idx changed
    const nextFlashCardChanged = currentCardIndex !== prevCardIndex;

    return (
        <div>
            <FlashCard
                flashcard={flashcards[currentCardIndex]}
                isFrontShown={true}
                isChanged={nextFlashCardChanged}
            />
            <button onClick={getNextFlashCard} >Next</button>
        </div>
    );
};

export default FlashcardContainer;