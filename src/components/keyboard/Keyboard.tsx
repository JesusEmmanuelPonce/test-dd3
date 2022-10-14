import { connect } from 'react-redux';
import { FC, useEffect } from 'react'

import ClearKey from 'resources/icons/ClearKey';
import { RootState } from 'store/index';
import { AppDispatch } from 'store';
import { setAttemptWord } from '../../store/actions/gameActions';
import { setTypingWord, clearTypedLetter, setOpenScore, setAttempt, clearTypedWord, setTotalAttempts } from 'store/actions/gameActions';
import "./styles.scss";

interface IKeyboardProps {
    attempt: number;
    openScore: boolean,
    typedWord: string[],
    selectWord: string,
    setOpenScoreRdx: (value: boolean) => void;
    setTypingWordRdx: (letter: string) => void;
    clearTypedLetterRdx: (word: string[]) => void;
    setAttemptRdx: (attempt: number) => void;
    clearTypedWordRdx: () => void;
    setAttemptWordRdx: (word: any) => void;
    totalAttempts: number;
	setTotalAttemptsRdx: (total: number) => void;
}

const Keyboard:FC <IKeyboardProps> = ({
    attempt,
    openScore,
    typedWord,
    selectWord,
    setOpenScoreRdx,
    setTypingWordRdx,
    clearTypedLetterRdx,
    setAttemptRdx,
    clearTypedWordRdx,
    setAttemptWordRdx,
    totalAttempts,
	setTotalAttemptsRdx,
}) => {

    const handleKey = ({target}: React.MouseEvent<HTMLElement> ) => {
        const button = target as HTMLInputElement

        if(typedWord.length < 5) {
            setTypingWordRdx(button?.value);
        }
    }

    const handleClearKey = () => {
        const word = typedWord;
        word.pop();

        clearTypedLetterRdx(word);
    }

    useEffect(() => {
        const verifyWords = () => {
            if(typedWord.length === 5) {
            
                if(attempt === 1) {
                    setAttemptWordRdx({ firstAttempt: typedWord})
                    setTotalAttemptsRdx(totalAttempts + 1)
                }
                if(attempt === 2) {
                    setAttemptWordRdx({ secodAttempt: typedWord})
                    setTotalAttemptsRdx(totalAttempts + 1)
                }
                if(attempt === 3) {
                    setAttemptWordRdx({ thirdAttempt: typedWord})
                    setTotalAttemptsRdx(totalAttempts + 1)
                }
                if(attempt === 4) {
                    setAttemptWordRdx({ fourthAttempt: typedWord})
                    setTotalAttemptsRdx(totalAttempts + 1)
                }
                if(attempt === 5) {
                    setAttemptWordRdx({ fifthAttempt: typedWord})
                    setTotalAttemptsRdx(totalAttempts + 1)
                }

                clearTypedWordRdx()
                setAttemptRdx(attempt + 1);
            }
        }

        verifyWords()

    // eslint-disable-next-line
    }, [typedWord])

    return (
        <div className='keyboard'>
            <div className="keyboard__firstRow">
                <button
                    type="button"
                    value="q"
                    onClick={handleKey}
                >
                    q
                </button>
                <button
                    type="button"
                    value="w"
                    onClick={handleKey}
                >
                    w
                </button>
                <button
                    type="button"
                    value="e"
                    onClick={handleKey}
                >
                    e
                </button>
                <button
                    type="button"
                    value="r"
                    onClick={handleKey}
                >
                    r
                </button>
                <button
                    type="button"
                    value="t"
                    onClick={handleKey}
                >
                    t
                </button>
                <button
                    type="button"
                    value="y"
                    onClick={handleKey}
                >
                    y
                </button>
                <button
                    type="button"
                    value="u"
                    onClick={handleKey}
                >
                    u
                </button>
                <button
                    type="button"
                    value="i"
                    onClick={handleKey}
                >
                    i
                </button>
                <button
                    type="button"
                    value="o"
                    onClick={handleKey}
                >
                    o
                </button>
                <button
                    type="button"
                    value="p"
                    onClick={handleKey}
                >
                    p
                </button>
            </div>

            <div className="keyboard__secondRow">
                <button
                    type="button"
                    value="a"
                    onClick={handleKey}
                >
                    a
                </button>
                <button
                    type="button"
                    value="s"
                    onClick={handleKey}
                >
                    s
                </button>
                <button
                    type="button"
                    value="d"
                    onClick={handleKey}
                >
                    d
                </button>
                <button
                    type="button"
                    value="f"
                    onClick={handleKey}
                >
                    f
                </button>
                <button
                    type="button"
                    value="g"
                    onClick={handleKey}
                >
                    g
                </button>
                <button
                    type="button"
                    value="h"
                    onClick={handleKey}
                >
                    h
                </button>
                <button
                    type="button"
                    value="j"
                    onClick={handleKey}
                >
                    j
                </button>
                <button
                    type="button"
                    value="k"
                    onClick={handleKey}
                >
                    k
                </button>
                <button
                    type="button"
                    value="l"
                    onClick={handleKey}
                >
                    l
                </button>
                <button
                    type="button"
                    value="ñ"
                    onClick={handleKey}
                >
                    ñ
                </button>
            </div>

            <div className="keyboard__thirdRow">
                <button
                    type="button"
                    value=""
                    onClick={handleKey}
                    className="enterKey"
                >
                    ENTER
                </button>
                <button
                    type="button"
                    value="z"
                    onClick={handleKey}
                >
                    q
                </button>
                <button
                    type="button"
                    value="x"
                    onClick={handleKey}
                >
                    x
                </button>
                <button
                    type="button"
                    value="c"
                    onClick={handleKey}
                >
                    c
                </button>
                <button
                    type="button"
                    value="v"
                    onClick={handleKey}
                >
                    v
                </button>
                <button
                    type="button"
                    value="b"
                    onClick={handleKey}
                >
                    b
                </button>
                <button
                    type="button"
                    value="n"
                    onClick={handleKey}
                >
                    n
                </button>
                <button
                    type="button"
                    value="m"
                    onClick={handleKey}
                >
                    m
                </button>
                <button
                    type="button"
                    value=""
                    onClick={handleClearKey}
                    className="clearKey"
                >
                    <ClearKey />
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
    typedWord: gameReducer?.typingWord ?? [],
    openScore: gameReducer?.openScore ?? false,
    selectWord: gameReducer?.word ?? "",
    attempt: gameReducer?.attempts ?? 1,
    totalAttempts: gameReducer?.totalAttempts ?? 0,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setOpenScoreRdx: (value: boolean) => dispatch(setOpenScore(value)),
    setTypingWordRdx: (letter: string) => dispatch(setTypingWord(letter)),
    clearTypedLetterRdx: (word: string[]) => dispatch(clearTypedLetter(word)),
    setAttemptRdx: (attempt: number) => dispatch(setAttempt(attempt)),
    clearTypedWordRdx: () => dispatch(clearTypedWord()),
    setAttemptWordRdx: (word: any) => dispatch(setAttemptWord(word)),
    setTotalAttemptsRdx: (total: number) => dispatch(setTotalAttempts(total))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)