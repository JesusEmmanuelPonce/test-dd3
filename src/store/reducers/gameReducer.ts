import { GameActions } from "store/actions/gameActions";
import { SET_THEME } from "store/types/gameTypes";

export interface GameStore {
    theme: string
}

const initialState = {
    theme: "light"
}

const subscriptionsReducer = (state: GameStore = initialState, action: GameActions): GameStore => {
    
    switch (action.type) {
		case SET_THEME:
			return {
				...state,
				theme: action?.payload
			};

		default:
			return state;
		}
  }

export default subscriptionsReducer;