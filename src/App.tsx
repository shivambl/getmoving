import { Provider } from 'react-redux';
import WorkoutList from "./components/WorkoutList";
import WorkoutPlayer from "./components/WorkoutPlayer";
import styles from "./styles/components.module.css";
import { store } from './store';

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