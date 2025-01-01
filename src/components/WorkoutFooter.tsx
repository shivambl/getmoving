import { Interval } from "../types";
import styles from "../styles/components.module.css";
import { formatDuration } from "../utils";

interface WorkoutFooterProps {
    intervals: Interval[];
}

const WorkoutFooter = ({ intervals }: WorkoutFooterProps) => {
    const totalDuration = intervals.reduce((sum, interval) => sum + interval.duration, 0);

    return (
        <div className={styles.totalTime}>
            <p className={styles.totalTimeText}>
                Total Duration: {formatDuration(totalDuration)}
            </p>
        </div>
    );
};

export default WorkoutFooter;