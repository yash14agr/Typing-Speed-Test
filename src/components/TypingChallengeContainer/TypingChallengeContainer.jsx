import React from 'react';
import { ChallengeDetailsCard } from '../ChallengeDetailsCard/ChallengeDetailsCard';
import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

export const TypingChallengeContainer = ({ onInputChange, selectedParagraph, timerstarted, timeRemaining, words, characters, wpm, testInfo }) => {
    return (
        <div className="typing-challenge-container">
            {/* Detail Section */}
            <div className="details-container">
                {/* Words typed*/}
                <ChallengeDetailsCard CardName="Words" CardValue={words} />

                {/* characters typed*/}
                <ChallengeDetailsCard CardName="Characters" CardValue={characters} />

                {/* speed*/}
                <ChallengeDetailsCard CardName="Speed" CardValue={wpm} />

            </div>

            {/* Real Challenge */}
            <div className="typewriter-container">
                <TypingChallenge onInputChange={onInputChange} timeRemaining={timeRemaining} timerstarted={timerstarted} selectedParagraph={selectedParagraph} wpm={wpm} testInfo={testInfo} />
            </div>
        </div>
    )
}
