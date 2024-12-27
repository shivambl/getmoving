import { useState } from "react"
import styles from "../styles/components.module.css"
import WorkoutHeader from "./WorkoutHeader"
import WorkoutBody from "./WorkoutBody"
import WorkoutFooter from "./WorkoutFooter"

const Workout = ({ workout, setWorkout }) => {
    const [isEditing, setIsEditing] = useState(false)

    if (!workout?.intervals?.length) {
        return null
    }

    return (
        <div className={styles.workoutCard}>
            <WorkoutHeader
                name={workout.name}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setWorkout={setWorkout}
            />
            <WorkoutBody 
                intervals={workout.intervals}
                isEditing={isEditing}
                setWorkout={setWorkout}
            />
            <WorkoutFooter intervals={workout.intervals} />
        </div>
    )
}

export default Workout