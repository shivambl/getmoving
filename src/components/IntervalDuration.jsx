import { useState } from "react"
import styles from "../styles/components.module.css"
import { formatDuration } from "../utils"

const IntervalDuration = ({ duration, index, isEditing, setWorkout }) => {
    const [isEditingDuration, setIsEditingDuration] = useState(false)

    const handleChange = (e) => {
        const newDuration = parseInt(e.target.value, 10)
        if (!isNaN(newDuration)) {
            setWorkout(workout => ({
                ...workout,
                intervals: workout.intervals.map((int, i) => 
                    i === index ? { ...int, duration: newDuration } : int
                )
            }))
        }
    }

    const handleBlur = () => {
        setIsEditingDuration(false)
    }

    if (isEditing && isEditingDuration) {
        return (
            <input
                type="number"
                value={duration}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.intervalInput} ${styles.intervalDurationInput}`}
                autoFocus
            />
        )
    }

    return (
        <span 
            className={styles.intervalDuration}
            onClick={() => isEditing && setIsEditingDuration(true)}
        >
            {formatDuration(duration)}
        </span>
    )
}

export default IntervalDuration 