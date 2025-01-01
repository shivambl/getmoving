import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import Workout from "./components/Workout";
import WorkoutPlayer from "./components/WorkoutPlayer";
import styles from "./styles/components.module.css";
import { store } from './store';
import { RootState } from './store';

// Create a WorkoutList component to use Redux hooks
const WorkoutList = () => {
    const workouts = useSelector((state: RootState) => state.workouts.workouts);

    return (
        <>
            {workouts.map((workout) => (
                <div key={workout.id}>
                    <Workout workout={workout} />
                </div>
            ))}
        </>
    );
};

// Main App component
const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.appContainer}>
                <div className={styles.cardList}>
                    <WorkoutPlayer />
                    <WorkoutList />
                </div>
            </div>
        </Provider>
    );
};

export default App;