import { useState } from "react";
import { Workout } from "../types";
import styles from "../styles/components.module.css";

interface WorkoutHeaderProps {
    name: string;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
    onUpdate: (workout: Workout) => void;
    workout: Workout;
    onDelete: () => void;
}

const WorkoutHeader = ({ name, isEditing, setIsEditing, onUpdate, workout, onDelete }: WorkoutHeaderProps) => {
    const [editedName, setEditedName] = useState(name);

    const handleSave = () => {
        onUpdate({ ...workout, name: editedName });
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <div className={styles.workoutHeader}>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className={styles.workoutTitleInput}
                    />
                    <div className={styles.workoutHeaderButtons}>
                    <button onClick={onDelete} className={styles.deleteWorkoutButton}>
                        Delete
                    </button>
                    <button onClick={handleSave} className={styles.editButton}>
                        Save
                    </button>
                    </div>
                </div>
            ) : (
                <div className={styles.workoutHeader}>
                    <h2 className={styles.workoutTitle}>{name}</h2>
                    <div className={styles.workoutHeaderButtons}>
                        <button onClick={() => setIsEditing(true)} className={styles.editButton}>
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default WorkoutHeader; 