import { ACTIONS, ActionType } from "../constants.ts";
import styles from "../styles/components.module.css";

interface IntervalActionProps {
    action: ActionType;
    isEditing: boolean;
    onChange: (action: ActionType) => void;
}

const IntervalAction = ({ action, isEditing, onChange }: IntervalActionProps) => {
    if (!isEditing) {
        return <div className={styles.intervalAction}>{action}</div>;
    }

    return (
        <select
            value={action}
            onChange={(e) => onChange(e.target.value as ActionType)}
            className={`${styles.intervalInput} ${styles.intervalActionInput}`}
        >
            {Object.values(ACTIONS).map((actionOption) => (
                <option key={actionOption} value={actionOption}>
                    {actionOption}
                </option>
            ))}
        </select>
    );
};

export default IntervalAction; 