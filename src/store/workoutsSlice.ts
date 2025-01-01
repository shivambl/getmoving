import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACTIONS } from '../constants.ts';
import { WorkoutState, Workout, WorkoutWithoutId } from '../types.ts';

const dummyWorkout1: Workout = {
    id: '1',
    name: "Simplest Run",
    intervals: [
        { action: ACTIONS.WARMUP, duration: 10 },
        { action: ACTIONS.RUN, duration: 30 },
        { action: ACTIONS.COOLDOWN, duration: 10 }
    ]
};

const dummyWorkout2: Workout = {
    id: '2',
    name: "Simple Sprint",
    intervals: [
        { action: ACTIONS.WALK, duration: 10 },
        { action: ACTIONS.SPRINT, duration: 30 },
        { action: ACTIONS.REST, duration: 10 }
    ]
};

const initialState: WorkoutState = {
    workouts: [dummyWorkout1, dummyWorkout2],
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
