import React, { useState, useEffect } from 'react';
import '../components/LessonOne.css'; // Ensure the path is correct
import { Header } from '../components/header';

export const LessonOne = () => {
  const [isRectangleVisible, setRectangleVisible] = useState(false);
  const [isBreatheButtonVisible, setBreatheButtonVisible] = useState(false);
  const [isCounterTextVisible, setCounterTextVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isIntroTextVisible, setIntroTextVisible] = useState(true);
  const [isStartButtonClicked, setStartButtonClicked] = useState(false);

  useEffect(() => {
    let countdown;
    if (isRectangleVisible && timeLeft > 0) {
      countdown = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(countdown);
            setModalVisible(true);
            setModalMessage('Time\'s up or you mistimed your breathing! Please try again.');
            setIsSuccess(false);
            setBreatheButtonVisible(false);
            setCounterTextVisible(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [isRectangleVisible, timeLeft]);

  const handleButtonClick = () => {
    const bar = document.querySelector('#blackBar');
    const rectangle = document.querySelector('#redRectangle');
    const barPosition = bar.getBoundingClientRect().left - rectangle.getBoundingClientRect().left;
    const greenStart = 0.01 * rectangle.offsetWidth;
    const greenEnd = 0.99 * rectangle.offsetWidth;

    if (timeLeft > 0) {
      if (barPosition >= greenStart && barPosition <= greenEnd) {
        setCounter(prevCounter => {
          const newCounter = prevCounter + 1;
          if (newCounter >= 10) {
            setModalVisible(true);
            setModalMessage('Congratulations! You\'ve completed the task.');
            setIsSuccess(true);
            setBreatheButtonVisible(false);
            setCounterTextVisible(false);
          }
          return newCounter;
        });
      } else {
        setModalVisible(true);
        setModalMessage('You mistimed your breathing or ran out of time! Please try again.');
        setIsSuccess(false);
        setBreatheButtonVisible(false);
      }
    }
  };

  const startGame = () => {
    setRectangleVisible(true);
    setBreatheButtonVisible(true);
    setCounterTextVisible(true);
    setCounter(0);
    setTimeLeft(30);
    setIntroTextVisible(false);
    setStartButtonClicked(true);
  };

  return (
    <>
      <Header/>
      <div className="lesson-one">
        <section className="hero">
          {isRectangleVisible && (
            <div id="redRectangle">
              <div id="blackBar"></div>
            </div>
          )}
          {isBreatheButtonVisible && (
            <button id="breatheButton" onClick={handleButtonClick}>Breathe</button>
          )}
          {isCounterTextVisible && (
            <div id="counterText">Counter: {counter}</div>
          )}
          {!isStartButtonClicked && isIntroTextVisible && (
            <div className="hero-content">
              <h3 className="text">
                This stage focuses on learning about the G-forces that astronauts have to face when exiting Earth. In this lesson, you will have to control your breathing to survive the amount of strain put on you. To do this, you will have to click 10 times when the black bar is in the green color. As well as this, you only have 30 seconds. If you fail once, you die. Good luck.
              </h3>
              <button className="btn" onClick={startGame}>Click Here to Continue</button>
            </div>
          )}
          {isRectangleVisible && (
            <div id="timerDisplay">Time Left: {timeLeft}s</div>
          )}
        </section>

        {modalVisible && (
          <div id="modal" className="modal">
            <div className="modal-content">
              <p>{modalMessage}</p>
              {isSuccess ? (
                <a href="http://localhost:3000/LessonTwo">Proceed to Next Lesson</a>
              ) : (
                <a href="http://localhost:3000/LessonOne">Try Again</a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
