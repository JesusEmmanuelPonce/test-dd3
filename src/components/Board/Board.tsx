
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
		<div className='board'>
			<div className='board__examples'>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
			</div>
			<div className='board__examples'>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
			</div>
			<div className='board__examples'>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
			</div>
			<div className='board__examples'>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
			</div>
			<div className='board__examples'>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
				<div className="board__examples-letter"></div>
			</div>
		</div>
	)
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	typedWord: gameReducer?.typingWord ?? [],
});

export default connect(mapStateToProps)(Game)