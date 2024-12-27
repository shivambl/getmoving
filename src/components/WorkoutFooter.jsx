import styles from "../styles/components.module.css"
import { formatDuration } from "../utils"

const WorkoutFooter = ({ intervals }) => {
    const totalDuration = intervals.reduce((total, interval) => total + interval.duration, 0)
    
    return (
        <div className={styles.totalTime}>
            <p className={styles.totalTimeText}>
                Total Time: {formatDuration(totalDuration)}
            </p>
        </div>
    )
}

export default WorkoutFooter 