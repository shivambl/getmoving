import { Interval } from "../types";
import styles from "../styles/components.module.css";

interface WorkoutFooterProps {
    intervals: Interval[];
}

const WorkoutFooter = ({ intervals }: WorkoutFooterProps) => {
    const totalDuration = intervals.reduce((sum, interval) => sum + interval.duration, 0);
    const minutes = Math.floor(totalDuration / 60);
    const seconds = totalDuration % 60;

    return (
        <div className={styles.totalTime}>
            <p className={styles.totalTimeText}>
                Total Duration: {minutes}:{seconds.toString().padStart(2, '0')}
            </p>
        </div>
    );
};

export default WorkoutFooter; 