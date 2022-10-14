import { FC } from 'react';
import { connect } from 'react-redux';

import CustomModal from 'components/Modals/CustomModal';
import { setOpenScore } from 'store/actions/gameActions';
import { AppDispatch, RootState } from 'store';
import "./styles.scss";

interface IScoreModalProps {
    theme: string;
    openScore: boolean;
    setOpenScoreRdx: (value: boolean) => void;
    wins: number;
    totalAttempts: number;
};

const ScoreModal: FC<IScoreModalProps> = ({
    wins,
    theme,
    openScore,
    totalAttempts,
    setOpenScoreRdx
}) => {

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
                    04:10
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
    totalAttempts: gameReducer?.totalAttempts ?? 0
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setOpenScoreRdx: (value: boolean) => dispatch(setOpenScore(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreModal);