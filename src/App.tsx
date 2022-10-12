import { useState } from 'react';

import AppBar from 'components/Ui/AppBar';
import Keyboard from 'components/Keyboard';
import ScoreModal from 'components/Modals/ScoreModal';
import InstructionsModal from 'components/Modals/InstructionsModal';
import "./app.scss"
import "./scss/styles.scss";

const App = () => {

	const [openScore, setOpenScore] = useState<boolean>(false);
	const [openInstructions, setOpenInstructions] = useState<boolean>(false);

	return (
		<div className="app">
			<header className='app__header'>
				<AppBar />
			</header>

			<section className='app__keyboard'>
				<Keyboard />
			</section>

			<InstructionsModal
				open={openInstructions}
				onClose={() => setOpenInstructions(false)}
			/>
			<ScoreModal
				open={openScore}
				onClose={() => setOpenScore(false)}
			/>
		</div>
  	);
}

export default App;
