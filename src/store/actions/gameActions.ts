import { SET_THEME, SET_THEME_TYPE } from "store/types/gameTypes";

export interface SetTheme {
    type: SET_THEME_TYPE;
    payload: string;
};

export const setTheme = (theme: string): SetTheme => ({
    type: SET_THEME,
    payload: theme
});
export type GameActions = SetTheme;