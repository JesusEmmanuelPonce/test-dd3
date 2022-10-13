import { FC } from 'react'
import { connect } from 'react-redux';

import ClearKey from 'resources/icons/ClearKey';
import { RootState } from 'store/index';
import { AppDispatch } from 'store';
import { setTypingWord, clearTypedLetter } from 'store/actions/gameActions';
import "./styles.scss";

interface IKeyboardProps {
    typedWord: string[],
    setTypingWordRdx: (letter: string) => void;
    clearTypedLetterRdx: (word: string[]) => void;
}

const Keyboard:FC <IKeyboardProps> = ({
    typedWord,
    setTypingWordRdx,
    clearTypedLetterRdx,
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
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setTypingWordRdx: (letter: string) => dispatch(setTypingWord(letter)),
    clearTypedLetterRdx: (word: string[]) => dispatch(clearTypedLetter(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)