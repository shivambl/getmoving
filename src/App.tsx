import { Provider } from 'react-redux';
import Workout from "./components/Workout";
import WorkoutPlayer from "./components/WorkoutPlayer";
import styles from "./styles/components.module.css";
import { store } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.appContainer}>
                <div className={styles.workoutCard}>
                    <WorkoutPlayer />
                    <Workout />
                </div>
            </div>
        </Provider>
    );
};

export default App;