import styles from "../styles/components.module.css"
import WorkoutInterval from "./WorkoutInterval"
import { ACTIONS } from "../constants"

const WorkoutBody = ({ intervals, isEditing, setWorkout }) => {
    const handleAddInterval = () => {
        setWorkout(workout => ({
            ...workout,
            intervals: [
                ...workout.intervals,
                {
                    action: ACTIONS.REST,
                    duration: 300 // 5 minutes in seconds
                }
            ]
        }))
    }

    return (
        <div className={styles.intervalsContainer}>
            {intervals.map((interval, index) => (
                <WorkoutInterval
                    key={index}
                    interval={interval}
                    index={index}
                    isEditing={isEditing}
                    setWorkout={setWorkout}
                />
            ))}
            {isEditing && (
                <button
                    className={styles.addButton}
                    onClick={handleAddInterval}
                >
                    + Add Interval
                </button>
            )}
        </div>
    )
}

export default WorkoutBody 