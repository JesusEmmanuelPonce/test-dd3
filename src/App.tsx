import { connect } from 'react-redux';
import { FC, useEffect } from 'react';

import Game from 'components/Game';
import Board from 'components/Board';
import AppBar from 'components/Ui/AppBar';
import Keyboard from 'components/Keyboard';
import ScoreModal from 'components/Modals/ScoreModal';
import { getWord } from 'services/games';
import InstructionsModal from 'components/Modals/InstructionsModal';
import InstructionsOnceModal from 'components/Modals/InstructionsOnceModal';
import { AppDispatch, RootState } from 'store';
import { setNewWord, setOnceModal, setTimer, setWord } from 'store/actions/gameActions';
import { clearTypedWord, clearAttemptWord, setAttempt } from './store/actions/gameActions';
import "./app.scss"
import "./scss/styles.scss";

interface IAppProps {
	theme: string;
	isNewWord: boolean;
	setWordRdx: (word: string) => void;
	clearTypedWordRdx: () => void;
	clearAttemptWordRdx: () => void;
	setAttemptRdx: (attempt: number) => void;
	setNewWordRdx: (value: boolean) => void;
	isWins: boolean;
	setTimerRdx: (seconds: number) => void,
	onceModalRdx: (value: boolean) => void;
	openOnceModal: boolean;
}

const App: FC<IAppProps> = ({
	theme,
	isWins,
	isNewWord,
	setWordRdx,
	setAttemptRdx,
	setNewWordRdx,
	clearTypedWordRdx,
	clearAttemptWordRdx,
	setTimerRdx,
	onceModalRdx,
	openOnceModal,
}) => {

	useEffect(() => {

		setAttemptRdx(1);
		clearTypedWordRdx();
		clearAttemptWordRdx();

		const setWord = async() => {
			const word = await getWord();

			if(word) {
				setTimerRdx(300);
				setWordRdx(word)
				setNewWordRdx(false);
			}
		};

		if(isNewWord) {
			setWord()
		}

	// eslint-disable-next-line
	}, [isWins]);

	// useEffect(() => {

	// 	const setOnceModalIntructions = () => {
	// 		onceModalRdx(true);
	// 	};

		
	// 	setOnceModalIntructions();

	// }, []);

	console.log({openOnceModal})

	return (
		<div className={`app ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
			<header className='app__header'>
				<AppBar />
			</header>

			<section className='flex justify-center'>
				<div className='app__board'>
					<Board />
					<div className='app__board-game'>
						<Game />
					</div>
				</div>
			</section>

			<section className='flex justify-center'>
				<Keyboard />
			</section>

			{openOnceModal ?
				<InstructionsOnceModal />
				: undefined
			}

			<InstructionsModal />
			<ScoreModal />
		</div>
  	);
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	theme: gameReducer?.theme ?? "",
	isNewWord: gameReducer?.isNewWord ?? false,
	isWins: gameReducer?.isWins ?? false,
	openOnceModal: gameReducer?.onceModal ?? false,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setWordRdx: (word: string) => dispatch(setWord(word)),
	clearTypedWordRdx: () => dispatch(clearTypedWord()),
	clearAttemptWordRdx: () => dispatch(clearAttemptWord()),
	setAttemptRdx: (attempt: number) => dispatch(setAttempt(attempt)),
	setNewWordRdx: (value: boolean) => dispatch(setNewWord(value)),
	setTimerRdx: (seconds: number) => dispatch(setTimer(seconds)),
	onceModalRdx: (value: boolean) => dispatch(setOnceModal(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
