import React from 'react'
import './TryAgain.css';

export const TryAgain = ({ startAgain, words, characters, wpm }) => {
    return (
        <div className="try-again-container">
            <h1>Test Result</h1>

            <div className="result-container">
                <p>
                    <b>characters:</b>{characters}
                </p>
                <p>
                    <b>words:</b>{words}
                </p>
                <p>
                    <b>speed:</b>{wpm} wpm
                </p>
            </div>

            <div>
                <button onClick={() => startAgain()} className='end-buttons retry-button'>re-try</button>

                <button onClick={() => {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=Here's My typing speed test result- Speed: ${wpm} words:${words} Characters:${characters}`,
                        "facebook-share-dialog",
                        "width=800, height=600")
                }}
                    className='end-buttons share-button'>share</button>

                <button onClick={() => {
                    window.open(`https://twitter.com/intent/tweet?text=Here's My typing speed test result- Speed: ${wpm} words:${words} Characters:${characters}`,
                        "Twitter",
                        "width=800, height=600")
                }} className='end-buttons tweet-button'>tweet</button>
            </div>

        </div>
    )
}
