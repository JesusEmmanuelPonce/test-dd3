import { FC } from 'react';

import CustomModal from 'components/Modals/CustomModal';
import { connect } from 'react-redux';
import { setOnceModal, setOpenInstructions } from 'store/actions/gameActions';
import { AppDispatch, RootState } from 'store';
import "./styles.scss";

interface IInstructionsProps {
    theme: string;
    onceModal: boolean;
    onceModalRdx: (value: boolean) => void;
    setOpenInstructionsRdx: (value: boolean) => void;
};

const Instructions: FC<IInstructionsProps> = ({
    theme,
    onceModal,
    onceModalRdx,
    setOpenInstructionsRdx
}) => {

    return (
        <CustomModal
            open={onceModal}
            className={{
                contentModal: theme === "light" ? "instructionsModalRootContent lightTheme" : "instructionsModalRootContent darkThemeContent",
                overlayModal: theme === "light" ? "lightTheme" : "darkTheme"
            }}
        >
            <div className='instructions'>

                <header>
                    <h2>Cómo jugar</h2>

                    <p>Adivina la palabra oculta en cinco intentos.</p>
                    <p>Cada intento debe ser una palabra válida de 5 letras.</p>
                    <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
                </header>

                <label>Ejemplos</label>

                <div className='instructions__examples'>
                    <div className="letter activeGreen">G</div>
                    <div className="letter">A</div>
                    <div className="letter">T</div>
                    <div className="letter">O</div>
                    <div className="letter">S</div>
                </div>

                <label>La letra <b>G</b> está en la palabra y en la posición correcta.</label>

                <div className='instructions__examples'>
                    <div className='letter'>V</div>
                    <div className='letter'>O</div>
                    <div className='letter activeYellow'>C</div>
                    <div className='letter'>A</div>
                    <div className='letter'>L</div>
                </div>

                <label>La letra <b>C</b> está en la palabra pero en la posición incorrecta.</label>

                <div className='instructions__examples'>
                    <div className='letter'>C</div>
                    <div className='letter'>A</div>
                    <div className='letter'>N</div>
                    <div className='letter'>T</div>
                    <div className='letter activeGray'>O</div>
                </div>

                <label>La letra <b>O</b> no está en la palabra.</label>

                <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>

                <p className='instructions__newWord'>¡Una palabra nueva cada 5 minutos!</p>

                <footer className='instructions__footer'>
                    <button
                        type='button'
                        onClick={() => onceModalRdx(!onceModal)}
                        className='instructions__footer-btnPlay'
                    >
                        !JUGAR¡
                    </button>
                </footer>
            </div>
        </CustomModal>
    )
}

const mapStateToProps = ({ gameReducer }: RootState) => ({
	theme: gameReducer?.theme ?? "",
    onceModal: gameReducer?.onceModal ?? false,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onceModalRdx: (value: boolean) => dispatch(setOnceModal(value)),
    setOpenInstructionsRdx: (value: boolean) => dispatch(setOpenInstructions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Instructions)