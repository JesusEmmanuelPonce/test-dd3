import { FC } from 'react';
import { connect } from 'react-redux';

import Game from 'components/Game';
import AppBar from 'components/Ui/AppBar';
import Keyboard from 'components/Keyboard';
import ScoreModal from 'components/Modals/ScoreModal';
import { RootState } from 'store';
import InstructionsModal from 'components/Modals/InstructionsModal';
import "./app.scss"
import "./scss/styles.scss";

interface IAppProps {
	theme: string;
}

const App: FC<IAppProps> = ({
	theme
}) => {

	return (
		<div className={`app ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
			<header className='app__header'>
				<AppBar />
			</header>

			<section className='app__game'>
				<Game />
			</section>

			<section className='app__keyboard'>
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

export default connect(mapStateToProps)(App);
