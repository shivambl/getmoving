import { useState } from "react"
import styles from "../styles/components.module.css"
import { ACTIONS } from "../constants"

const IntervalAction = ({ action, index, isEditing, setWorkout }) => {
    const [isEditingAction, setIsEditingAction] = useState(false)

    const handleChange = (e) => {
        const newAction = e.target.value
        setWorkout(workout => ({
            ...workout,
            intervals: workout.intervals.map((int, i) => 
                i === index ? { ...int, action: newAction } : int
            )
        }))
    }

    const handleBlur = () => {
        setIsEditingAction(false)
    }

    if (isEditing && isEditingAction) {
        return (
            <select
                value={action}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.intervalInput} ${styles.intervalActionInput}`}
                autoFocus
            >
                {Object.values(ACTIONS).map(action => (
                    <option key={action} value={action}>
                        {action}
                    </option>
                ))}
            </select>
        )
    }

    return (
        <span 
            className={styles.intervalAction}
            onClick={() => isEditing && setIsEditingAction(true)}
        >
            {action}
        </span>
    )
}

export default IntervalAction 