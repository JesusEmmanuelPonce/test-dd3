import { SET_THEME, SET_THEME_TYPE } from "store/types/gameTypes";
import { SET_OPEN_INSTRUCTIONS_TYPE, SET_OPEN_SCORE_TYPE, SET_OPEN_INSTRUCTIONS, SET_OPEN_SCORE } from '../types/gameTypes';

export interface SetTheme {
    type: SET_THEME_TYPE;
    payload: string;
};

export interface SetOpenInstructions {
    type: SET_OPEN_INSTRUCTIONS_TYPE;
    payload: boolean;
};

export interface SetOpenScore {
    type: SET_OPEN_SCORE_TYPE;
    payload: boolean;
};

export const setTheme = (theme: string): SetTheme => ({
    type: SET_THEME,
    payload: theme
});

export const setOpenInstructions = (value: boolean): SetOpenInstructions => ({
    type: SET_OPEN_INSTRUCTIONS,
    payload: value
});
export const setOpenScore = (value: boolean): SetOpenScore => ({
    type: SET_OPEN_SCORE,
    payload: value
});

export type GameActions = SetTheme | SetOpenInstructions | SetOpenScore;