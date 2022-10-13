import { connect } from 'react-redux';
import { FC, useEffect } from 'react';

import Game from 'components/Game';
import AppBar from 'components/Ui/AppBar';
import Keyboard from 'components/Keyboard';
import ScoreModal from 'components/Modals/ScoreModal';
import { setWord } from 'store/actions/gameActions';
import { getWord } from 'services/games';
import InstructionsModal from 'components/Modals/InstructionsModal';
import { AppDispatch, RootState } from 'store';
import "./app.scss"
import "./scss/styles.scss";

interface IAppProps {
	theme: string;
	setWordRdx: (word: string) => void;
}

const App: FC<IAppProps> = ({
	theme,
	setWordRdx
}) => {

	useEffect(() => {

		const setWord = async() => {
			const word = await getWord();

			if(word) {
				setWordRdx(word)
			}
		};

		setWord()

	}, []);

	return (
		<div className={`app ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
			<header className='app__header'>
				<AppBar />
			</header>

			<section className='flex justify-center'>
				<Game />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
