import React, { useState, useEffect } from 'react';
import Time from './Components/Time'
//import styles from './Time.module.scss'
import styles from './App.module.scss';


const App = () => {
  const [time, setTime] = useState(0); // aktualna wartość odliczanego czasu
  const [timer, setTimer] = useState(null); // wartość interwału
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Tutaj możesz zarządzać odliczaniem czasu lub obsługą interwału
    // Na przykład:
    if (isRunning) {
      console.log('zero')
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 100);
      }, 100));
    } else { clearInterval(timer) }
    return () => {
      if (isRunning) clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <Time time={time} />
      <div className={styles.component}>
        <button className={styles.button} onClick={handleStart}>Start</button>
        <button className={styles.button} onClick={handleStop}>Stop</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;