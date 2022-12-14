import { CLEAR_ATTEMPT_WORD_TYPE, CLEAR_TYPED_LETTER, CLEAR_TYPED_WORD, CLEAR_TYPED_WORD_TYPE, SET_ATTEMPT, SET_ATTEMPT_TYPE, SET_ATTEMPT_WORD, SET_ATTEMPT_WORD_TYPE, SET_IS_WIN, SET_IS_WIN_TYPE, SET_NEW_WORD, SET_NEW_WORD_TYPE, SET_ONCE_MODAL, SET_ONCE_MODAL_TYPE, SET_THEME, SET_THEME_TYPE, SET_TIMER, SET_TIMER_TYPE, SET_TOTAL_ATTEMPTS, SET_TOTAL_ATTEMPTS_TYPE, SET_TYPING_WORD, SET_TYPING_WORD_TYPE, SET_WINS_TYPE, SET_WORD, SET_WORD_TYPE } from "store/types/gameTypes";
import { SET_OPEN_INSTRUCTIONS_TYPE, SET_OPEN_SCORE_TYPE, SET_OPEN_INSTRUCTIONS, SET_OPEN_SCORE, CLEAR_TYPED_LETTER_TYPE, CLEAR_ATTEMPT_WORD, SET_WINS } from '../types/gameTypes';

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

export interface ClearTypedLetter {
    type: CLEAR_TYPED_LETTER_TYPE;
    payload: string[];
};

export interface SetAttempt {
    type: SET_ATTEMPT_TYPE;
    payload: number;
};

export interface SetAttemptWord {
    type: SET_ATTEMPT_WORD_TYPE;
    payload: any;
};

export interface ClearAttemptWord {
    type: CLEAR_ATTEMPT_WORD_TYPE;
};

export interface SetWins {
    type: SET_WINS_TYPE;
    payload: number;
};

export interface SetTotalAttempts {
    type: SET_TOTAL_ATTEMPTS_TYPE;
    payload: number;
};

export interface SetIsWin {
    type: SET_IS_WIN_TYPE;
    payload: boolean;
};

export interface SetNewWord {
    type: SET_NEW_WORD_TYPE;
    payload: boolean;
};

export interface SetTimer {
    type: SET_TIMER_TYPE;
    payload: number;
};

export interface SetOnceModal {
    type: SET_ONCE_MODAL_TYPE;
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

export const clearTypedLetter = (word: string[]): ClearTypedLetter => ({
    type: CLEAR_TYPED_LETTER,
    payload: word,
});

export const setAttempt = (attempt: number): SetAttempt => ({
    type: SET_ATTEMPT,
    payload: attempt,
});

export const setAttemptWord = (attemptWord: any): SetAttemptWord => ({
    type: SET_ATTEMPT_WORD,
    payload: attemptWord,
});

export const clearAttemptWord = (): ClearAttemptWord => ({
    type: CLEAR_ATTEMPT_WORD,
});

export const setWins = (wins: number): SetWins => ({
    type: SET_WINS,
    payload: wins
});

export const setTotalAttempts = (total: number): SetTotalAttempts => ({
    type: SET_TOTAL_ATTEMPTS,
    payload: total
});

export const setIsWins = (value: boolean): SetIsWin => ({
    type: SET_IS_WIN,
    payload: value
});

export const setNewWord = (value: boolean): SetNewWord => ({
    type: SET_NEW_WORD,
    payload: value
});

export const setTimer = (second: number): SetTimer => ({
    type: SET_TIMER,
    payload: second
});

export const setOnceModal = (value: boolean): SetOnceModal => ({
    type: SET_ONCE_MODAL,
    payload: value,
});

export type GameActions =
    SetWord |
    SetWins |
    SetTheme |
    SetIsWin |
    SetTimer |
    SetNewWord |
    SetAttempt |
    SetOnceModal |
    SetOpenScore |
    SetTypingWord |
    ClearTypedWord |
    SetAttemptWord |
    SetTotalAttempts |
    ClearTypedLetter |
    ClearAttemptWord |
    SetOpenInstructions;