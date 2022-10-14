
import { connect } from 'react-redux';
import { FC, useCallback, useEffect, useState } from 'react';

import { IResult } from 'store/reducers/gameReducer';
import { setWins } from '../../store/actions/gameActions';
import { AppDispatch, RootState } from 'store';
import "./styles.scss"

interface IGameProps {
	word: string;
	wins: number;
	result: IResult;
	attempts: number;
	setWinsRdx: (wins: number) => void;
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

const Game: FC<IGameProps> = ({
	wins,
	word,
	result,
	attempts,
	setWinsRdx,
}) => {

	const [wordArr, setWordArr] = useState<string[]>([])

	const getIsSame = (resultArr: string[], wordSelected: string[]) => {
		if(word.length === 5) {
			const isSame = resultArr.length === wordSelected.length && resultArr.every((element, index) => {
				return element === wordSelected[index]; 
			});

			if(isSame) {
				setWinsRdx(wins + 1)
			}
		}
	}

	const verifyStatus = useCallback((resultArr: string[], typedWord: string, wordSelected: string[], index: number) => {
		let status = "";

		getIsSame(resultArr, wordSelected);

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

	// eslint-disable-next-line
	}, [attempts]);

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
							<div key={index} className={`${verifyStatus(result?.firstAttempt, word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.secodAttempt.length ?
					<>
						{result?.secodAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(result?.secodAttempt, word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.thirdAttempt.length ?
					<>
						{result?.thirdAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(result?.thirdAttempt, word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.fourthAttempt.length ?
					<>
						{result?.fourthAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(result?.fourthAttempt, word, wordArr, index)} board__examples-letter`}>{word}</div>
						))}
					</> : <BoardsRows />
				}
			</div>
			<div className='board__examples'>
				{result?.fifthAttempt.length ?
					<>
						{result?.fifthAttempt.map((word, index) => (
							<div key={index} className={`${verifyStatus(result?.fifthAttempt, word, wordArr, index)} board__examples-letter`}>{word}</div>
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
	wins: gameReducer?.wins ?? 0,
	attempts: gameReducer?.attempts ?? 0,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setWinsRdx: (wins: number) => dispatch(setWins(wins)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game)