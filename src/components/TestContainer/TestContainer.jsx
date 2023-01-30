import React from 'react'
import { TryAgain } from '../TryAgain/TryAgain';
import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

export const TestContainer = ({ startAgain, onInputChange, selectedParagraph, timerstarted, timeRemaining, words, characters, wpm, testInfo }) => {
    return (
        <div className="test-container">
            {timeRemaining > 0 ?
                (
                    <div
                        data-aos="fade-up"
                        className="typing-challenge-container">
                        <TypingChallengeContainer onInputChange={onInputChange} selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerstarted={timerstarted} words={words} characters={characters} wpm={wpm} testInfo={testInfo} />
                    </div>
                )
                :
                (
                    <div className="try-again-container">
                        {/* <h1>This is the Try again </h1> */}
                        <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm} />
                    </div>
                )}
        </div>
    )
}
