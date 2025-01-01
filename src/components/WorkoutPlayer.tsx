import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import styles from "../styles/components.module.css";

const WorkoutPlayer = () => {
    const workout = useSelector((state: RootState) => state.workouts.workouts[0]); // For now, using first workout
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentInterval, setCurrentInterval] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    
    if (!workout) return null;

    const currentDuration = workout.intervals[currentInterval]?.duration || 0;
    const timeElapsed = currentDuration - timeRemaining;
    const progress = (timeElapsed / currentDuration) * 100;

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining(time => time - 1);
            }, 1000);
        } else if (isPlaying && currentInterval < workout.intervals.length - 1) {
            setCurrentInterval(i => i + 1);
            setTimeRemaining(workout.intervals[currentInterval + 1].duration);
        } else if (timeRemaining === 0) {
            setIsPlaying(false);
        }

        return () => clearInterval(timer);
    }, [isPlaying, timeRemaining, currentInterval, workout.intervals]);

    const handlePlay = () => {
        setCurrentInterval(0);
        setTimeRemaining(workout.intervals[0].duration);
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleSkip = () => {
        if (currentInterval < workout.intervals.length - 1) {
            setCurrentInterval(i => i + 1);
            setTimeRemaining(workout.intervals[currentInterval + 1].duration);
        } else {
            setIsPlaying(false);
            setTimeRemaining(0);
        }
    };

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`${styles.cardContainer} ${styles.playerContainer}`}>
            <div className={styles.playerControls}>
                {!isPlaying ? (
                    <button onClick={handlePlay} className={styles.playButton}>
                        ▶
                    </button>
                ) : (
                    <>
                        <button onClick={handlePause} className={styles.pauseButton}>
                            ⏸︎
                        </button>
                        <button onClick={handleSkip} className={styles.skipButton}>
                            →
                        </button>
                    </>
                )}
            </div>
            {(isPlaying || timeRemaining > 0) && (
                <div className={styles.playerStatus}>
                    <div className={styles.currentAction}>
                        {workout.intervals[currentInterval].action}
                    </div>
                    <div className={styles.timeRemaining}>
                        {formatTime(timeRemaining)}
                    </div>
                    <div className={styles.progressBarContainer}>
                        <div 
                            className={styles.progressBar}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkoutPlayer; 