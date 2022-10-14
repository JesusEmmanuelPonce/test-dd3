
import { FC } from 'react';
import { connect } from 'react-redux';
import { IResult } from 'store/reducers/gameReducer';
import { RootState } from 'store';
import "./styles.scss"

interface IGameProps {
	attempts: number
	typedWord: string[]
	result: IResult,
}

const Game: FC<IGameProps> = ({
	attempts,
	typedWord,
	result,
}) => {

	return (
		<div className='game'>
			<div className='game__examples'>
				{attempts === 1 ? 
					<>
						{typedWord.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</> : 
					<>
						{result?.firstAttempt.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</>
				}
			</div>
			<div className='game__examples'>
				{attempts === 2 ? 
					<>
						{typedWord.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</> : 
					<>
						{result?.secodAttempt.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</>
				}
			</div>
			<div className='game__examples'>
				{attempts === 3 ? 
					<>
						{typedWord.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</> : 
					<>
						{result?.thirdAttempt.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</>
				}
			</div>
			<div className='game__examples'>
				{attempts === 4 ? 
					<>
						{typedWord.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</> : 
					<>
						{result?.fourthAttempt.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</>
				}
			</div>
			<div className='game__examples'>
				{attempts === 5 ? 
					<>
						{typedWord.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</> : 
					<>
						{result?.fifthAttempt.map((word, index) => (
							<div key={index} className="game__examples-letter">{word}</div>	
						))}
					</>
				}
			</div>
		</div>
	)
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	attempts: gameReducer?.attempts ?? 1,
	typedWord: gameReducer?.typingWord ?? [],
	result: gameReducer?.result ?? {},
});

export default connect(mapStateToProps)(Game)