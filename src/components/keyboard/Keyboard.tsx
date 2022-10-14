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
    typedWord: string[],
    setTypingWordRdx: (letter: string) => void;
    clearTypedLetterRdx: (word: string[]) => void;
    setAttemptRdx: (attempt: number) => void;
    clearTypedWordRdx: () => void;
    setAttemptWordRdx: (word: any) => void;
    totalAttempts: number;
	setTotalAttemptsRdx: (total: number) => void;
    isWins: boolean;
}

const Keyboard:FC <IKeyboardProps> = ({
    attempt,
    typedWord,
    setTypingWordRdx,
    clearTypedLetterRdx,
    setAttemptRdx,
    clearTypedWordRdx,
    setAttemptWordRdx,
    totalAttempts,
	setTotalAttemptsRdx,
    isWins,
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
                    disabled={isWins}
                    value="q"
                    onClick={handleKey}
                >
                    q
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="w"
                    onClick={handleKey}
                >
                    w
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="e"
                    onClick={handleKey}
                >
                    e
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="r"
                    onClick={handleKey}
                >
                    r
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="t"
                    onClick={handleKey}
                >
                    t
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="y"
                    onClick={handleKey}
                >
                    y
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="u"
                    onClick={handleKey}
                >
                    u
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="i"
                    onClick={handleKey}
                >
                    i
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="o"
                    onClick={handleKey}
                >
                    o
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="p"
                    onClick={handleKey}
                >
                    p
                </button>
            </div>

            <div className="keyboard__secondRow">
                <button
                    type="button"
                    disabled={isWins}
                    value="a"
                    onClick={handleKey}
                >
                    a
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="s"
                    onClick={handleKey}
                >
                    s
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="d"
                    onClick={handleKey}
                >
                    d
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="f"
                    onClick={handleKey}
                >
                    f
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="g"
                    onClick={handleKey}
                >
                    g
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="h"
                    onClick={handleKey}
                >
                    h
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="j"
                    onClick={handleKey}
                >
                    j
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="k"
                    onClick={handleKey}
                >
                    k
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="l"
                    onClick={handleKey}
                >
                    l
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="ñ"
                    onClick={handleKey}
                >
                    ñ
                </button>
            </div>

            <div className="keyboard__thirdRow">
                <button
                    type="button"
                    disabled={isWins}
                    onClick={handleKey}
                    className="enterKey"
                >
                    ENTER
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="z"
                    onClick={handleKey}
                >
                    z
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="x"
                    onClick={handleKey}
                >
                    x
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="c"
                    onClick={handleKey}
                >
                    c
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="v"
                    onClick={handleKey}
                >
                    v
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="b"
                    onClick={handleKey}
                >
                    b
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="n"
                    onClick={handleKey}
                >
                    n
                </button>
                <button
                    type="button"
                    disabled={isWins}
                    value="m"
                    onClick={handleKey}
                >
                    m
                </button>
                <button
                    type="button"
                    disabled={isWins}
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
    attempt: gameReducer?.attempts ?? 1,
    totalAttempts: gameReducer?.totalAttempts ?? 0,
    isWins: gameReducer?.isWins ?? false,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setTypingWordRdx: (letter: string) => dispatch(setTypingWord(letter)),
    clearTypedLetterRdx: (word: string[]) => dispatch(clearTypedLetter(word)),
    setAttemptRdx: (attempt: number) => dispatch(setAttempt(attempt)),
    clearTypedWordRdx: () => dispatch(clearTypedWord()),
    setAttemptWordRdx: (word: any) => dispatch(setAttemptWord(word)),
    setTotalAttemptsRdx: (total: number) => dispatch(setTotalAttempts(total))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)