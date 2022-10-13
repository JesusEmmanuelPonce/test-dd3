
import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'store';
import "./styles.scss"

interface IGameProps {
	typedWord: string[]
}

const Game: FC<IGameProps> = ({
	typedWord
}) => {

	return (
		<div className='game'>
			<div className='game__examples'>
				{typedWord.map((word, index) => (
					<div key={index} className="game__examples-letter">{word}</div>	
				))}
			</div>
			<div className='game__examples'>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
			</div>
			<div className='game__examples'>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
			</div>
			<div className='game__examples'>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
			</div>
			<div className='game__examples'>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
				<div className="game__examples-letter"></div>
			</div>
		</div>
	)
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	typedWord: gameReducer?.typingWord ?? [],
});

export default connect(mapStateToProps)(Game)