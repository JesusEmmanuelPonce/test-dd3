import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CustomModal from 'components/Modals/CustomModal';
import { setOpenScore, setTimer } from 'store/actions/gameActions';
import { AppDispatch, RootState } from 'store';
import "./styles.scss";

interface IScoreModalProps {
    theme: string;
    openScore: boolean;
    setOpenScoreRdx: (value: boolean) => void;
    wins: number;
    totalAttempts: number;
    setTimerRdx: (second: number) => void;
    timerSeconds: number;
};

const ScoreModal: FC<IScoreModalProps> = ({
    wins,
    theme,
    openScore,
    totalAttempts,
    setOpenScoreRdx,
    setTimerRdx,
    timerSeconds,
}) => {

    const [min, setMin] = useState<number | string>(0)
    const [sec, setSec] = useState<number | string>(0)
    
    useEffect(() => {
        let seconds = timerSeconds;

        const timer = setInterval(() => {
            seconds = seconds - 1;
            
            const secTimer = (Math.round(seconds % 0x3C)).toString();
            const minTimer  = (Math.floor(seconds / 0x3C ) % 0x3C).toString();

            setSec(secTimer)
            setMin(minTimer)

            setTimerRdx(seconds);
            

        }, 1000);

        return () => clearInterval(timer)
        
    }, [])

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

                <p className='scoreModal__nextWord'>
                    SIGUIENTE PALABRA
                </p>

                <p className='scoreModal__time'>
                    {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
                </p>

                <footer className='scoreModal__footer'>
                    <button
                        type='button'
                        onClick={() => setOpenScoreRdx(!openScore)}
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
    totalAttempts: gameReducer?.totalAttempts ?? 0,
    timerSeconds: gameReducer?.timerSeconds ?? 0,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setTimerRdx: (seconds: number) => dispatch(setTimer(seconds)),
    setOpenScoreRdx: (value: boolean) => dispatch(setOpenScore(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreModal);