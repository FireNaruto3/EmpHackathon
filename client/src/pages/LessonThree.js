import React, { useState, useEffect } from 'react';
import { INTERNAL_LINKS } from '../utils/links';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const LessonThree = () => {
    const [data, setData] = useState(generateRandomData());
    const [popup, setPopup] = useState(null);


    function generateRandomData() {
        return {
            windSpeed: Math.floor(Math.random() * 100) + 1,
            temperature: Math.floor(Math.random() * 100) + 1,
        };
    }


    const checkAnswer = (answer) => {
        const correctAnswer = (data.windSpeed > 50 || data.temperature > 50) ? 'dont land' : 'land';
        if (answer === correctAnswer) {
            setPopup('correct');
        } else {
            setPopup('wrong');
        }
    }

    const retry = () => {
        setPopup(null);
        setData(generateRandomData());
    }

    const redirectToFinish = () => {
        setPopup(null);
        window.location.href = INTERNAL_LINKS.HOME; 
    }

    const containerStyle = {
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        width: '80%',
        maxWidth: '600px',
        margin: '0 auto'
    };

    const buttonStyle = (type) => ({
        padding: '12px 25px',
        fontSize: '18px',
        margin: '10px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        transition: 'background-color 0.3s, transform 0.3s',
        backgroundColor: type === 'land' ? '#4CAF50' : '#f44336',
        ':hover': {
            transform: 'scale(1.05)'
        }
    });

    const popupStyle = {
        display: popup ? 'block' : 'none',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '20%',
        fontSize: '20px',
        zIndex: '1000'
    };

    const popupContentStyle = {
        background: '#333',
        padding: '30px',
        borderRadius: '10px',
        display: 'inline-block',
        maxWidth: '90%'
    };

    const popupButtonStyle = (type) => ({
        padding: '12px 25px',
        fontSize: '18px',
        marginTop: '20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        transition: 'background-color 0.3s',
        backgroundColor: type === 'finish' ? '#4CAF50' : '#f44336',
        ':hover': {
            opacity: '0.9'
        }
    });

    return (
        <>
        <Header/>
        <div style={containerStyle}>
            <h1>Should You Land or Not?</h1>
            <div className="info">
                Wind Speed: {data.windSpeed} m/s<br />
                Temperature: {data.temperature} °C
            </div>
            <button
                style={buttonStyle('land')}
                onClick={() => checkAnswer('land')}
            >
                Land
            </button>
            <button
                style={buttonStyle('dont-land')}
                onClick={() => checkAnswer('dont land')}
            >
                Don't Land
            </button>

            <div style={popupStyle}>
                <div style={popupContentStyle}>
                    {popup === 'wrong' && (
                        <>
                            Incorrect! Please try again.
                            <button
                                style={popupButtonStyle('retry')}
                                onClick={retry}
                            >
                                Try Again
                            </button>
                        </>
                    )}
                    {popup === 'correct' && (
                        <>
                            Correct! Good decision.
                            <button
                                style={popupButtonStyle('finish')}
                                onClick={redirectToFinish}
                                href = {INTERNAL_LINKS.HOME}
                            >   
                                Finish
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
        <div>
        <Footer/>
            </div>
        </>
       
    );
};

