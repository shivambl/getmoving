import styles from "../styles/components.module.css";

interface IntervalDurationProps {
    duration: number;
    isEditing: boolean;
    onChange: (duration: number) => void;
}

const IntervalDuration = ({ duration, isEditing, onChange }: IntervalDurationProps) => {
    if (!isEditing) {
        return <div className={styles.intervalDuration}>{duration}s</div>;
    }

    return (
        <input
            type="number"
            value={duration}
            onChange={(e) => onChange(Math.max(1, parseInt(e.target.value) || 0))}
            min="1"
            className={`${styles.intervalInput} ${styles.intervalDurationInput}`}
        />
    );
};

export default IntervalDuration; 