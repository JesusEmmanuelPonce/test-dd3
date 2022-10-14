
import { connect } from 'react-redux';
import { FC, useEffect, useState } from 'react';

import { IResult } from 'store/reducers/gameReducer';
import { RootState } from 'store';
import "./styles.scss"

interface IGameProps {
	result: IResult;
	word: string;
}

const BoardsRows = () => (
	<>
		<div className="board__examples-letter"></div>
		<div className="board__examples-letter"></div>
		<div className="board__examples-letter"></div>
		<div className="board__examples-letter"></div>
		<div className="board__examples-letter"></div>
	</>
);

const verifyStatus = (typedWord: string, wordSelected: string[], index: number) => {
	let status = "";

	if(!wordSelected.includes(typedWord)) {
		status = "activeGray"
	}

	if(wordSelected.includes(typedWord)) {
		status = "activeYellow"
	}
	if(wordSelected[index] === typedWord) {
		status = "activeGreen"
	}

	return status;
}

const Game: FC<IGameProps> = ({
	result,
	word,
}) => {

	const [wordArr, setWordArr] = useState<string[]>([])

	useEffect(() => {

		const convertWordToArr = () => {

			const wordArr = word.split("");
			setWordArr(wordArr);
		};

		convertWordToArr();

	// eslint-disable-next-line
	}, [word]);

	return (
		<div className='board'>
			<div className='board__examples'>
				{result?.firstAttempt.length ?
					<>
						{result?.firstAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.secodAttempt.length ?
					<>
						{result?.secodAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.thirdAttempt.length ?
					<>
						{result?.thirdAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.fourthAttempt.length ?
					<>
						{result?.fourthAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.fifthAttempt.length ?
					<>
						{result?.fifthAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
		</div>
	)
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	result: gameReducer?.result ?? {},
	word: gameReducer?.word ?? "",
});

export default connect(mapStateToProps)(Game)