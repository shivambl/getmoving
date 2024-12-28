export const ACTIONS = {
    WARMUP: 'Warm Up',
    RUN: 'Run',
    COOLDOWN: 'Cool Down',
    WALK: 'Walk',
    SPRINT: 'Sprint',
    REST: 'Rest'
} as const;

export type ActionType = typeof ACTIONS[keyof typeof ACTIONS];