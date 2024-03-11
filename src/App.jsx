import { useState } from 'react'
import './App.css'
import FlashCardContainer from './components/FlashCardContainer';
import flashcards from '../public/database.json';

function App() {

    return (
        <>
            <h1>All Basketball</h1>
            <h3>How much do you know about basketball? Test your basketball knowledge here!</h3>
            <h3>Number of cards: {flashcards.length}</h3>
            <FlashCardContainer />
        </>
    )
}

export default App
