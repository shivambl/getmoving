import styles from "../styles/components.module.css"

const WorkoutHeader = ({ name, isEditing, setIsEditing, setWorkout }) => {
    const handleNameChange = (e) => {
        setWorkout(workout => ({
            ...workout,
            name: e.target.value
        }))
    }

    return (
        <div className={styles.workoutHeader}>
            {isEditing ? (
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className={styles.workoutTitleInput}
                    autoFocus
                />
            ) : (
                <h2 className={styles.workoutTitle}>{name}</h2>
            )}
            <button
                className={styles.editButton}
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ? "Save" : "Edit"}
            </button>
        </div>
    )
}

export default WorkoutHeader