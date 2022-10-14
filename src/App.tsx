import { connect } from 'react-redux';
import { FC, useEffect } from 'react';

import Game from 'components/Game';
import Board from 'components/Board';
import AppBar from 'components/Ui/AppBar';
import Keyboard from 'components/Keyboard';
import ScoreModal from 'components/Modals/ScoreModal';
import { setWord } from 'store/actions/gameActions';
import { getWord } from 'services/games';
import InstructionsModal from 'components/Modals/InstructionsModal';
import { clearTypedWord, clearAttemptWord, setAttempt } from './store/actions/gameActions';
import { AppDispatch, RootState } from 'store';
import "./app.scss"
import "./scss/styles.scss";

interface IAppProps {
	theme: string;
	setWordRdx: (word: string) => void;
	clearTypedWordRdx: () => void;
	clearAttemptWordRdx: () => void;
	setAttemptRdx: (attempt: number) => void;
}

const App: FC<IAppProps> = ({
	theme,
	setWordRdx,
	setAttemptRdx,
	clearTypedWordRdx,
	clearAttemptWordRdx,
}) => {

	useEffect(() => {

		setAttemptRdx(1);
		clearTypedWordRdx();
		clearAttemptWordRdx();

		const setWord = async() => {
			const word = await getWord();

			if(word) {
				setWordRdx(word)
			}
		};

		setWord()

	// eslint-disable-next-line
	}, []);

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

			<InstructionsModal />
			<ScoreModal />
		</div>
  	);
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	theme: gameReducer?.theme ?? "",
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setWordRdx: (word: string) => dispatch(setWord(word)),
	clearTypedWordRdx: () => dispatch(clearTypedWord()),
	clearAttemptWordRdx: () => dispatch(clearAttemptWord()),
	setAttemptRdx: (attempt: number) => dispatch(setAttempt(attempt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
