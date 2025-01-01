import { useState } from "react"
import { useDispatch } from "react-redux"
import { Workout as WorkoutType } from "../types"
import { deleteWorkout, updateWorkout } from "../store/workoutsSlice"
import styles from "../styles/components.module.css"
import WorkoutHeader from "./WorkoutHeader.tsx"
import WorkoutBody from "./WorkoutBody.tsx"
import WorkoutFooter from "./WorkoutFooter.tsx"

const Workout = ({workout}: {workout: WorkoutType}) => {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteWorkout(workout.id))
    }

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
                onDelete={handleDelete}
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