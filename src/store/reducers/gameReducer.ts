import { GameActions } from "store/actions/gameActions";
import { CLEAR_TYPED_LETTER, SET_ATTEMPT, SET_ATTEMPT_WORD, SET_NEW_WORD, SET_THEME, SET_TIMER, SET_TOTAL_ATTEMPTS, SET_TYPING_WORD, SET_WINS } from "store/types/gameTypes";
import { SET_OPEN_INSTRUCTIONS, SET_OPEN_SCORE, SET_WORD, CLEAR_TYPED_WORD, CLEAR_ATTEMPT_WORD, SET_IS_WIN } from '../types/gameTypes';

export interface GameStore {
	word?: string;
    theme: string
	wins: number;
	openScore: boolean
	typingWord: string[];
	openInstructions: boolean
	result: IResult,
	attempts: number,
	totalAttempts: number,
	isWins: boolean;
	isNewWord: boolean;
	timerSeconds: number;
}

export interface IResult {
	firstAttempt: string[],
	secodAttempt: string[],
	thirdAttempt: string[],
	fourthAttempt: string[],
	fifthAttempt: string[],
}

const initialState = {
	wins: 0,
    theme: "light",
	timerSeconds: 300,
	isWins: false,
	isNewWord: true,
	openScore: false,
	typingWord: [],
	openInstructions: false,
	attempts: 1,
	totalAttempts: 0,
	result: {
		firstAttempt: [],
		secodAttempt: [],
		thirdAttempt: [],
		fourthAttempt: [],
		fifthAttempt: [],
	}
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

		case SET_WORD:
			return {
				...state,
				word: action?.payload
			};

		case SET_TYPING_WORD:
			return {
				...state,
				typingWord: [...state.typingWord, action?.payload]
			};

		case CLEAR_TYPED_WORD:
			return {
				...state,
				typingWord: []
			};

		case CLEAR_TYPED_LETTER:
			return {
				...state,
				typingWord: [...action?.payload]
			};

		case SET_ATTEMPT:
			return {
				...state,
				attempts: action?.payload
			};

		case SET_ATTEMPT_WORD:
			return {
				...state,
				result: {
					...state.result,
					...action?.payload
				}
			};

		case CLEAR_ATTEMPT_WORD:
			return {
				...state,
				result: initialState?.result
			};

		case SET_WINS:
			return {
				...state,
				wins: action?.payload
			};

		case SET_TOTAL_ATTEMPTS:
			return {
				...state,
				totalAttempts: action?.payload
			};

		case SET_IS_WIN:
			return {
				...state,
				isWins: action?.payload
			};

		case SET_NEW_WORD:
			return {
				...state,
				isNewWord: action?.payload
			};

		case SET_TIMER:
			return {
				...state,
				timerSeconds: action?.payload
			};

		default:
			return state;
		}
  }

export default subscriptionsReducer;