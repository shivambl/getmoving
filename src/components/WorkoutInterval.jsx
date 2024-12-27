import styles from "../styles/components.module.css"
import IntervalAction from "./IntervalAction"
import IntervalDuration from "./IntervalDuration"

const WorkoutInterval = ({ interval, index, isEditing, setWorkout }) => {
    const handleDelete = () => {
        setWorkout(workout => ({
            ...workout,
            intervals: workout.intervals.filter((_, i) => i !== index)
        }))
    }

    const moveInterval = (direction) => {
        setWorkout(workout => {
            // Check if the new index is within the bounds of the array
            const newIndex = index + direction;
            if (newIndex < 0 || newIndex >= workout.intervals.length) {
                return workout;
            }
            const newIntervals = [...workout.intervals];
            [newIntervals[index], newIntervals[newIndex]] = [newIntervals[newIndex], newIntervals[index]];
            return { ...workout, intervals: newIntervals };
        });
    }

    return (
        <div className={styles.intervalItem}>
            {isEditing && (
                <div className={styles.reorderButtons}>
                    <button
                        className={styles.reorderButton}
                        onClick={() => moveInterval(-1)}
                    >
                        ↑
                    </button>
                    <button
                        className={styles.reorderButton}
                        onClick={() => moveInterval(1)}
                    >
                        ↓
                    </button>
                </div>
            )}
            <div className={styles.intervalContent}>
                <IntervalAction
                    action={interval.action}
                    index={index}
                    isEditing={isEditing}
                    setWorkout={setWorkout}
                />
                <IntervalDuration
                    duration={interval.duration}
                    index={index}
                    isEditing={isEditing}
                    setWorkout={setWorkout}
                />
            </div>
            {isEditing && (
                <button
                    className={styles.deleteButton}
                    onClick={handleDelete}
                    title="Delete interval"
                >
                    ✕
                </button>
            )}
        </div>
    )
}

export default WorkoutInterval 