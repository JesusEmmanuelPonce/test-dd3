
import { FC } from 'react';
import "./styles.scss"

interface IGameProps {}

const Game: FC<IGameProps> = ({}) => {
	return (
		<div className='game'>
			<div className='game__examples'>
				<input className="letter" value="G" />
				<input className="letter" value="A" />
				<input className="letter" value="T" />
				<input className="letter" value="O" />
				<input className="letter" value="S" />
			</div>
		</div>
	)
}

export default Game