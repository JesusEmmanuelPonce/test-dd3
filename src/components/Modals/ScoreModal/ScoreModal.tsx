import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CustomModal from 'components/Modals/CustomModal';
import { AppDispatch, RootState } from 'store';
import { clearAttemptWord, clearTypedWord, setAttempt, setIsWins, setNewWord, setOpenScore, setTimer } from 'store/actions/gameActions';
import "./styles.scss";

interface IScoreModalProps {
    theme: string;
    openScore: boolean;
    setOpenScoreRdx: (value: boolean) => void;
    wins: number;
    isWins: boolean;
    totalAttempts: number;
    setTimerRdx: (second: number) => void;
    setIsWinsRdx: (isWins: boolean) => void;
    setNewWordRdx: (newWord: boolean) => void;
    timerSeconds: number;

    clearTypedWordRdx: () => void;
	clearAttemptWordRdx: () => void;
	setAttemptRdx: (attempt: number) => void;
    attempts: number;
    word: string;
};

const ScoreModal: FC<IScoreModalProps> = ({
    word,
    wins,
    theme,
    isWins,
    openScore,
    totalAttempts,
    setOpenScoreRdx,
    setTimerRdx,
    timerSeconds,
    setIsWinsRdx,
    setNewWordRdx,
    attempts,

    setAttemptRdx,
    clearTypedWordRdx,
    clearAttemptWordRdx,
}) => {

    const [min, setMin] = useState<number | string>(0)
    const [sec, setSec] = useState<number | string>(0)

    const handleAccept = () => {

        if(isWins) {
            setTimerRdx(300);

            setIsWinsRdx(false);
            setNewWordRdx(true);
            setOpenScoreRdx(false);

            setAttemptRdx(1);
            clearTypedWordRdx();
            clearAttemptWordRdx();
        } else if(attempts > 5) {
            setTimerRdx(300);

            setIsWinsRdx(false);
            setNewWordRdx(true);
            setOpenScoreRdx(false);

            setAttemptRdx(1);
            clearTypedWordRdx();
            clearAttemptWordRdx();
        } else {
            setOpenScoreRdx(false)
        }
    }

    useEffect(() => {
        let seconds = timerSeconds;

        const getTimer = () => {
            seconds = seconds - 1;
            
            const secTimer = (Math.round(seconds % 0x3C)).toString();
            const minTimer  = (Math.floor(seconds / 0x3C ) % 0x3C).toString();
            
            setSec(secTimer)
            setMin(minTimer)
            
            setTimerRdx(seconds);
        }

        let timer:any = null;

        if(timerSeconds > 0) {
            timer = setInterval(() => {
                getTimer();
            }, 1000);
        }

        return () => clearInterval(timer)
        
    // eslint-disable-next-line
    }, [timerSeconds])

    return (
        <CustomModal
            open={openScore}
            className={{
                contentModal: theme === "light" ? "scoreModalRootContent lightTheme" : "scoreModalRootContent darkThemeContent",
                overlayModal: theme === "light" ? "lightTheme" : "darkTheme"
            }}
        >
            <div className='scoreModal'>

                <header>
                    <h2>Estadísticas</h2>
                </header>
                
                <div className="scoreModal__points">
                    <div className='scoreModal__points-wrapper'>
                        <span>{totalAttempts}</span>
                        <p>Jugadas</p>
                    </div>
                    <div className='scoreModal__points-wrapper'>
                        <span>{wins}</span>
                        <p>Victorias</p>
                    </div>
                </div>

                {attempts > 5 ? <p className='scoreModal__word'>La palabra era: <b>{word}</b></p> : undefined}

                {attempts < 5 ?
                    <>
                        <p className='scoreModal__nextWord'>
                            SIGUIENTE PALABRA
                        </p>

                        <p className='scoreModal__time'>
                            {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
                        </p>
                        
                    </>: undefined}

                <footer className='scoreModal__footer'>
                    <button
                        type='button'
                        onClick={handleAccept}
                        className='scoreModal__footer-btnPlay'
                    >
                        ACEPTAR
                    </button>
                </footer>
            </div>
        </CustomModal>
    )
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	theme: gameReducer?.theme ?? "",
    openScore: gameReducer?.openScore ?? false,
    wins: gameReducer?.wins ?? 0,
    isWins: gameReducer?.isWins ?? false,
    totalAttempts: gameReducer?.totalAttempts ?? 0,
    timerSeconds: gameReducer?.timerSeconds ?? 0,
    attempts: gameReducer?.attempts ?? 0,
    word: gameReducer?.word ?? "",
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setTimerRdx: (seconds: number) => dispatch(setTimer(seconds)),
    setIsWinsRdx: (isWins: boolean) => dispatch(setIsWins(isWins)),
    setOpenScoreRdx: (value: boolean) => dispatch(setOpenScore(value)),
    setNewWordRdx: (value: boolean) => dispatch(setNewWord(value)),

    clearTypedWordRdx: () => dispatch(clearTypedWord()),
	clearAttemptWordRdx: () => dispatch(clearAttemptWord()),
	setAttemptRdx: (attempt: number) => dispatch(setAttempt(attempt)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreModal);