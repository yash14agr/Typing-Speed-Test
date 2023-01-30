import React from 'react'
import './TestLetter.css';

export const TestLetter = ({ individualLetterInfo }) => {

    const statusClassName = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[individualLetterInfo.status];

    return (
        <span className={`test-letter ${statusClassName}`}>{individualLetterInfo.testLetter}</span>
    )
}
