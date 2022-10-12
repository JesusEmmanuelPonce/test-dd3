import { FC } from 'react';

import CustomModal from 'components/Modals/CustomModal';
import "./styles.scss";

interface IInstructionsProps {
    open: boolean;
    onClose: () => void;
};

const Instructions: FC<IInstructionsProps> = ({
    open,
    onClose
}) => {

    return (
        <CustomModal
            open={open}
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
                        onClick={onClose}
                        className='instructions__footer-btnPlay'
                    >
                            !JUGAR¡
                    </button>
                </footer>
            </div>
        </CustomModal>
    )
}

export default Instructions