import { Interval, Workout } from "../types.ts";
import WorkoutInterval from "./WorkoutInterval.tsx";
import styles from "../styles/components.module.css";
import { ACTIONS } from "../constants.ts";

interface WorkoutBodyProps {
    intervals: Interval[];
    isEditing: boolean;
    onUpdate: (workout: Workout) => void;
    workout: Workout;
}

const WorkoutBody = ({ intervals, isEditing, onUpdate, workout }: WorkoutBodyProps) => {
    const handleAddInterval = () => {
        const newInterval: Interval = { action: ACTIONS.REST, duration: 30 };
        onUpdate({
            ...workout,
            intervals: [...intervals, newInterval]
        });
    };

    return (
        <>
            <div className={styles.intervalsContainer}>
                {intervals.map((interval, index) => (
                    <WorkoutInterval
                        key={index}
                        interval={interval}
                        index={index}
                        isEditing={isEditing}
                        onUpdate={onUpdate}
                        workout={workout}
                    />
                ))}
            </div>
            {isEditing && (
                <button onClick={handleAddInterval} className={styles.addButton}>
                    + Add Interval
                </button>
            )}
        </>
    );
};

export default WorkoutBody; 