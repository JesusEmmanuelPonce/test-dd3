import { GameActions } from "store/actions/gameActions";
import { SET_THEME } from "store/types/gameTypes";
import { SET_OPEN_INSTRUCTIONS, SET_OPEN_SCORE } from '../types/gameTypes';

export interface GameStore {
    theme: string
	openScore: boolean
	openInstructions: boolean
}

const initialState = {
    theme: "light",
	openScore: false,
	openInstructions: false,
}

const subscriptionsReducer = (state: GameStore = initialState, action: GameActions): GameStore => {
    
    switch (action.type) {
		case SET_THEME:
			return {
				...state,
				theme: action?.payload
			};

		case SET_OPEN_INSTRUCTIONS:
			return {
				...state,
				openInstructions: action?.payload
			};

		case SET_OPEN_SCORE:
			return {
				...state,
				openScore: action?.payload
			};

		default:
			return state;
		}
  }

export default subscriptionsReducer;