import { ActionType } from './constants.ts';

export interface Interval {
  action: ActionType;
  duration: number;
}

export interface WorkoutWithoutId {
  name: string;
  intervals: Interval[];
}

export interface Workout extends WorkoutWithoutId {
  id: string;
}

export interface WorkoutState {
  workouts: Workout[];
}

export interface RootState {
  workouts: WorkoutState;
}