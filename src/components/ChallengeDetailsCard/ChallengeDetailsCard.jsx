import React from 'react';
import './ChallengeDetailsCard.css';

export const ChallengeDetailsCard = ({ CardName, CardValue }) => {
    return (
        <div className="details-card-container">
            <div className="card-name">{CardName}</div>
            <div className="card-value">{CardValue}</div>
        </div>
    )
}
