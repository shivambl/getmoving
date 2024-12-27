import { useState } from "react"
import { ACTIONS } from "./constants"
import Workout from "./components/Workout"
import WorkoutPlayer from "./components/WorkoutPlayer"
import styles from "./styles/components.module.css"

const App = () => {
    const [workout, setWorkout] = useState({
        name: "Simplest Run",
        intervals: [
            {
                action: ACTIONS.WARMUP,
                duration: 10
            },
            {
                action: ACTIONS.RUN,
                duration: 30
            },
            {
                action: ACTIONS.COOLDOWN,
                duration: 10
            }
        ]
    })

    return (
        <div className={styles.appContainer}>
            <div className={styles.workoutCard}>
                <WorkoutPlayer workout={workout} />
                <Workout workout={workout} setWorkout={setWorkout} />
            </div>
        </div>
    )
}

export default App
