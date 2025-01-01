import { useState } from "react"
import { useDispatch } from "react-redux"
import { Workout as WorkoutType } from "../types"
import { updateWorkout } from "../store/workoutsSlice"
import styles from "../styles/components.module.css"
import WorkoutHeader from "./WorkoutHeader.tsx"
import WorkoutBody from "./WorkoutBody.tsx"
import WorkoutFooter from "./WorkoutFooter.tsx"

const Workout = ({workout}: {workout: WorkoutType}) => {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()

    const handleWorkoutUpdate = (updatedWorkout: WorkoutType) => {
        dispatch(updateWorkout(updatedWorkout))
    }

    return (
        <div className={styles.cardContainer}>
            <WorkoutHeader
                name={workout.name}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                onUpdate={handleWorkoutUpdate}
                workout={workout}
            />
            <WorkoutBody 
                intervals={workout.intervals}
                isEditing={isEditing}
                onUpdate={handleWorkoutUpdate}
                workout={workout}
            />
            <WorkoutFooter intervals={workout.intervals} />
        </div>
    )
}

export default Workout 