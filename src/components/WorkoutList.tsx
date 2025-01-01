import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Workout from './Workout';

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

export default WorkoutList; 