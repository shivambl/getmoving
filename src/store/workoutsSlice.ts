import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACTIONS } from '../constants';
import { WorkoutState, Workout, WorkoutWithoutId } from '../types';

const dummyWorkout: Workout = {
    id: '1',
    name: "Simplest Run",
    intervals: [
        { action: ACTIONS.WARMUP, duration: 10 },
        { action: ACTIONS.RUN, duration: 30 },
        { action: ACTIONS.COOLDOWN, duration: 10 }
    ]
};

const initialState: WorkoutState = {
    workouts: [dummyWorkout],
};

const workoutsSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {
        clearWorkouts: (state) => {
            state.workouts = [];
        },
        addWorkout: (state, action: PayloadAction<WorkoutWithoutId>) => {
            state.workouts.push({ ...action.payload, id: crypto.randomUUID() });
        },
        deleteWorkout: (state, action: PayloadAction<string>) => {
            state.workouts = state.workouts.filter((workout) => workout.id !== action.payload);
        },
        updateWorkout: (state, action: PayloadAction<Workout>) => {
            const index = state.workouts.findIndex(w => w.id === action.payload.id);
            if (index !== -1) {
                state.workouts[index] = action.payload;
            }
        }
    },
});

export const { clearWorkouts, addWorkout, deleteWorkout, updateWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
