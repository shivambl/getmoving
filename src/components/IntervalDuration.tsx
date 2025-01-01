import styles from "../styles/components.module.css";
import { formatDuration } from "../utils";

interface IntervalDurationProps {
    duration: number;
    isEditing: boolean;
    onChange: (duration: number) => void;
}

const IntervalDuration = ({ duration, isEditing, onChange }: IntervalDurationProps) => {
    if (!isEditing) {
        return <div className={styles.intervalDuration}>{formatDuration(duration)}</div>;
    }

    return (
        <input
            type="number"
            value={duration}
            onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
            min="0"
            className={`${styles.intervalInput} ${styles.intervalDurationInput}`}
        />
    );
};

export default IntervalDuration; 