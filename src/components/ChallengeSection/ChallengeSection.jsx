import React from 'react'
import { TestContainer } from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = ({ startAgain, onInputChange, selectedParagraph, timerstarted, timeRemaining, words, characters, wpm, testInfo }) => {

    return (
        <div className="challnge-section-container">
            <h1
                data-aos="fade-down"
                className="challenge-section-header">
                Take a speed test now !
            </h1>
            <TestContainer startAgain={startAgain} onInputChange={onInputChange} selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerstarted={timerstarted} words={words} characters={characters} wpm={wpm} testInfo={testInfo} />
        </div>
    )
}

export default ChallengeSection