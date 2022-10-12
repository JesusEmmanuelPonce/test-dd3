import { FC } from 'react';

import CustomModal from 'components/CustomModal';
import "./styles.scss";

interface IScoreModalProps {
    open: boolean;
    onClose: () => void;
};

const ScoreModal: FC<IScoreModalProps> = ({
    open,
    onClose
}) => {

    return (
        <CustomModal
            open={open}
            className={{
                contentModal: "scoreModalRootContent"
            }}
        >
            <div className='scoreModal'>

                <header>
                    <h2>Estadísticas</h2>
                </header>
                
                <div className="scoreModal__points">
                    <div className='scoreModal__points-wrapper'>
                        <span>8</span>
                        <p>Jugadas</p>
                    </div>
                    <div className='scoreModal__points-wrapper'>
                        <span>2</span>
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
                        onClick={onClose}
                        className='scoreModal__footer-btnPlay'
                    >
                        ACEPTAR
                    </button>
                </footer>
            </div>
        </CustomModal>
    )
}

export default ScoreModal;