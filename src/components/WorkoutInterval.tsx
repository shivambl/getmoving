import { Interval, Workout } from "../types.ts";
import { ActionType } from "../constants.ts";
import IntervalAction from "./IntervalAction.tsx";
import IntervalDuration from "./IntervalDuration.tsx";
import styles from "../styles/components.module.css";

interface WorkoutIntervalProps {
    interval: Interval;
    index: number;
    isEditing: boolean;
    onUpdate: (workout: Workout) => void;
    workout: Workout;
}

const WorkoutInterval = ({ interval, index, isEditing, onUpdate, workout }: WorkoutIntervalProps) => {
    const handleActionChange = (newAction: ActionType) => {
        const newIntervals = [...workout.intervals];
        newIntervals[index] = { ...interval, action: newAction };
        onUpdate({ ...workout, intervals: newIntervals });
    };

    const handleDurationChange = (newDuration: number) => {
        const newIntervals = [...workout.intervals];
        newIntervals[index] = { ...interval, duration: newDuration };
        onUpdate({ ...workout, intervals: newIntervals });
    };

    const handleDelete = () => {
        const newIntervals = workout.intervals.filter((_, i) => i !== index);
        onUpdate({ ...workout, intervals: newIntervals });
    };

    const handleMoveUp = () => {
        if (index === 0) return;
        const newIntervals = [...workout.intervals];
        [newIntervals[index - 1], newIntervals[index]] = [newIntervals[index], newIntervals[index - 1]];
        onUpdate({ ...workout, intervals: newIntervals });
    };

    const handleMoveDown = () => {
        if (index === workout.intervals.length - 1) return;
        const newIntervals = [...workout.intervals];
        [newIntervals[index], newIntervals[index + 1]] = [newIntervals[index + 1], newIntervals[index]];
        onUpdate({ ...workout, intervals: newIntervals });
    };

    return (
        <div className={styles.intervalItem}>
            {isEditing && (
                <div className={styles.reorderButtons}>
                    <button onClick={handleMoveUp} className={styles.reorderButton}>↑</button>
                    <button onClick={handleMoveDown} className={styles.reorderButton}>↓</button>
                </div>
            )}
            <div className={styles.intervalContent}>
                <IntervalAction
                    action={interval.action}
                    isEditing={isEditing}
                    onChange={handleActionChange}
                />
                <IntervalDuration
                    duration={interval.duration}
                    isEditing={isEditing}
                    onChange={handleDurationChange}
                />
            </div>
            {isEditing && (
                <button onClick={handleDelete} className={styles.deleteButton}>
                    ×
                </button>
            )}
        </div>
    );
};

export default WorkoutInterval; 