import { CLEAR_TYPED_WORD, CLEAR_TYPED_WORD_TYPE, SET_THEME, SET_THEME_TYPE, SET_TYPING_WORD, SET_TYPING_WORD_TYPE, SET_WORD, SET_WORD_TYPE } from "store/types/gameTypes";
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

export interface SetWord {
    type: SET_WORD_TYPE;
    payload: string;
};

export interface SetTypingWord {
    type: SET_TYPING_WORD_TYPE;
    payload: string;
};

export interface ClearTypedWord {
    type: CLEAR_TYPED_WORD_TYPE;
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

export const setWord = (word: string): SetWord => ({
    type: SET_WORD,
    payload: word
});

export const setTypingWord = (letter: string): SetTypingWord => ({
    type: SET_TYPING_WORD,
    payload: letter
});

export const clearTypedWord = (): ClearTypedWord => ({
    type: CLEAR_TYPED_WORD,
});

export type GameActions =
    SetWord |
    SetTheme |
    SetOpenScore |
    SetTypingWord |
    ClearTypedWord |
    SetOpenInstructions;