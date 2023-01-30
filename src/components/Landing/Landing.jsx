import React from 'react';
import Typewriter from 'typewriter-effect';
import hero from "./../../Assets/hero.png";
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-container">
            <div
                data-aos="fade-right"
                className="landing-left">
                <img src={hero} alt="img" className='flash-image' />
            </div>

            <div
                data-aos="fade-left"
                className="landing-right">
                <p className='landing-text'>Can you type...</p>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Landing;